import db from '../../models/index';
import CRODService from '../../services/CRODService';
const { Op } = require('sequelize');

let getAllPro = async (req, res) => {
    const data = await db.Product.findAll();
    return res.render('admin/page/products/list.ejs', {data});
}

let GetCROD = async (req, res) => {
    const data = await db.Categori.findAll();
    return res.render('admin/page/products/add.ejs', {data})
}

let PostCROD = async (req, res) => {
    await CRODService.creatNewproducts(req.body, req.file.filename);
    return res.redirect("/admin/products");
}

let DeleteCROD = async (req, res) => {
    const id = req.params.id;
    await CRODService.removeProducts(id);
    return res.redirect("/admin/products");
}

let EditCROD = async (req, res) => {
    const id = req.params.id;
    if(id){
        const data_cate = await db.Categori.findAll();
        let dataRender = await CRODService.GetEdit(id);
        return res.render('admin/page/products/edit.ejs', {
            item: dataRender, 
            data_cate:data_cate 
        });
    } else{
        return res.send('404 not found!');
    }
}

let PostEditCROD = async (req, res)=> {
    console.log(req.body);
    let img = req.file ? req.file.filename : null;
    await CRODService.PostEdit(req.params.id, req.body , img);
    return res.redirect('/admin/products');
}

const search_ajax = async (req, res) => {
    const query = req.query.data;
    const data = await db.Product.findAll({
          where: {
            name: {
              [Op.like]: `%${query}%`
            }
          }
    });
    return res.render('admin/page/products/ajax.ejs', {data});
  }

module.exports = {
    getAllPro : getAllPro,
    GetCROD: GetCROD,
    PostCROD: PostCROD,
    DeleteCROD: DeleteCROD,
    EditCROD: EditCROD,
    PostEditCROD: PostEditCROD,
    search_ajax: search_ajax
}