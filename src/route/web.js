import express from "express";
import homeController from "../controllers/client/homeController";
import productsController from "../controllers/client/productsController";
import postController from "../controllers/client/postCtroller";
import AdminProductsController from "../controllers/admin/adminController";
import AdminCategorisController from "../controllers/admin/categorisController";
import AdminHomeController from "../controllers/admin/homeController";
import AdminUsersController from "../controllers/admin/userController";
const get_config = require('../modules/comfig.js')
const upload = get_config.upload;


let router = express.Router();

let initWebRoutes = (app) => {
    //--------------------------------CLIENT ROITER ----------------------------------//
    router.get('/', homeController.getHome);
    router.get('/home', homeController.getHome);
    router.get('/products', productsController.getALL);
    router.get('/product_details/:id', productsController.get_pro_detel);
    router.get('/products/:id', productsController.post_cart);
    router.post('/products/:id', productsController.post_cart);
    router.get('/cart', productsController.get_all_cart);
    router.get('/cart/:id', productsController.delete_cart);
    router.post('/cart/:id', productsController.delete_cart);
    router.get('/post', postController.GetPost);
    //--------------------------------ADMIN ROITER ----------------------------------//
    router.get('/admin', AdminHomeController.Gethome);
    router.get('/admin/home', AdminHomeController.Gethome);
    router.get('/admin/products', AdminProductsController.getAllPro);
    router.get('/admin/add-products', AdminProductsController.GetCROD);
    router.post('/admin/add-products', upload.single('hinh_anh') , AdminProductsController.PostCROD);
    router.get('/admin/products/:id', AdminProductsController.DeleteCROD);
    router.get('/admin/edit-products/:id', AdminProductsController.EditCROD);
    router.post('/admin/edit-products/:id', upload.single('hinh_anh') , AdminProductsController.PostEditCROD);
    //SEARCH AJAX
    router.get("/admin/ajax", AdminProductsController.search_ajax);

    //CATEGORIS
    router.get("/admin/category", AdminCategorisController.getAllCategoris);
    router.get("/admin/add-category" , AdminCategorisController.GetFormAddCategoris);
    router.post("/admin/add-category" , AdminCategorisController.CreatNewCategoris);
    router.get("/admin/category/:id" , AdminCategorisController.DeleteCategoris);
    router.get("/admin/edit-category/:id" , AdminCategorisController.GetEditCategoris);
    router.post("/admin/edit-category/:id" , AdminCategorisController.PostEditCategoris);

    //USER
    router.get("/admin/users", AdminUsersController.getAllUser);
    router.get("/admin/add-users" , AdminUsersController.GetFormAdd);
    router.post("/admin/add-users" , upload.single('hinh_anh') , AdminUsersController.PostFromAdd);
    router.get("/admin/users/:id", AdminUsersController.DeleteUser);
    router.get("/admin/edit-users/:id", AdminUsersController.GetDataEdit);
    router.post("/admin/edit-users/:id", upload.single('hinh_anh')  ,AdminUsersController.PostDataEdit);
    return app.use("/", router);
}

module.exports = initWebRoutes;
