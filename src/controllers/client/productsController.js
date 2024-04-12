import { where } from "sequelize";
import db from "../../models/index";

const getALL = async (req, res) => {
  try {
    const data = await db.Product.findAll();
    const data_sale = await db.Product.findAll({
      where: {
        category_id: 1
      }
    });
    const data_TT = await db.Product.findAll({
      where: {
        category_id: 7
      }
    })
  
    const data_VHVN = await db.Product.findAll({
      where: {
        category_id: 5
      }
    })
  
    const data_VHNG = await db.Product.findAll({
      where: {
        category_id: 6
      }
    })

    return res.render("client/products.ejs", { data, data_sale,data_VHVN, data_VHNG, data_TT});
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

const get_pro_detel = async (req, res) => {
  try {
    const proID = req.params.id;
    const data = await db.Product.findOne({ where: { id: proID } });
    return res.render("client/product_details.ejs", { data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

const post_cart = async (req, res) => {
  try {
    const proID = req.params.id;
    const data = await db.Product.findOne({ where: { id: proID } });
    if(data){
      await db.Oders_detail.create({
        id_oder : 1,
        id_product  : Number(proID),
        name: data.name,
        price : data.sale_price,
        qty: 1,
        img : data.img,
      });
    }
    return res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving cart");
  }
};

const get_all_cart = async (req, res) => {
  try {
    const data = await db.Oders_detail.findAll();
    return res.render("client/cart.ejs", { data });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};


const delete_cart = async (req, res) => {
  try {
    const id = req.params.id;
    await db.Oders_detail.destroy({
      where: {
        id: id
      },
    });
    return res.redirect("/cart");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving users");
  }
};

module.exports = {
  getALL,
  get_pro_detel,
  post_cart,
  get_all_cart,
  delete_cart
};
