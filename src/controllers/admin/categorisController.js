import db from '../../models/index';
import CRODServiceCategoris from '../../services/CRODcategoris';
const { Op } = require('sequelize');

let getAllCategoris = async (req, res) => {
    const data = await db.Categori.findAll();
    return res.render('admin/page/category/list.ejs', {data});
}



let GetFormAddCategoris = async (req, res) => {
    return res.render('admin/page/category/add.ejs')
}

let CreatNewCategoris = async (req, res) => {
    await CRODServiceCategoris.creatCategoris(req.body);
    return res.redirect("/admin/category");
}

let DeleteCategoris = async (req, res) => {
    const id = req.params.id;
    await CRODServiceCategoris.removeCategoris(id);
    return res.redirect("/admin/category");
}

let GetEditCategoris = async (req, res) => {
    const id = req.params.id;
    if(id){
        let dataRender = await CRODServiceCategoris.GetEdit(id);
        return res.render('admin/page/category/edit.ejs', {
            item: dataRender
        });
    } else{
        return res.send('404 not found!');
    }
}

let PostEditCategoris = async (req, res)=> {
    await CRODServiceCategoris.PostEdit(req.params.id, req.body);
    return res.redirect('/admin/category');
}

module.exports = {
    getAllCategoris: getAllCategoris,
    DeleteCategoris: DeleteCategoris,
    GetFormAddCategoris: GetFormAddCategoris,
    CreatNewCategoris: CreatNewCategoris,
    GetEditCategoris: GetEditCategoris,
    PostEditCategoris: PostEditCategoris
}