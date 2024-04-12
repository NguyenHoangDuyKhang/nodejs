import db from '../../models/index';
import CRODUsers from '../../services/CRODUsers';
const { Op } = require('sequelize');

let getAllUser = async (req, res) => {
    const data = await db.User.findAll();
    console.log(data);
    return res.render('admin/page/users/list.ejs', {data: data});
}

let GetFormAdd = async (req, res) => {
    return res.render('admin/page/users/add.ejs');
}

let PostFromAdd = async (req, res) => {
    await CRODUsers.creatNewUsers(req.body, req.file.filename);
    return res.redirect("/admin/users");
}


let DeleteUser = async (req, res) => {
    const id = req.params.id;
    await CRODUsers.removeUser(id);
    return res.redirect("/admin/users");
}

let GetDataEdit = async (req, res) => {
    const id = req.params.id;
    if(id){
        let dataRender = await CRODUsers.GetEditUser(id);
        return res.render('admin/page/users/edit.ejs', {
            item: dataRender
        });
    } else{
        return res.send('404 not found!');
    }
}

let PostDataEdit = async (req, res) => {
    await CRODUsers.PostEditUsers(req.params.id, req.body , req.file.filename);
    return res.redirect('/admin/users');
}



module.exports = {
    getAllUser: getAllUser,
    GetFormAdd : GetFormAdd,
    PostFromAdd: PostFromAdd,
    DeleteUser: DeleteUser,
    GetDataEdit: GetDataEdit,
    PostDataEdit: PostDataEdit
}