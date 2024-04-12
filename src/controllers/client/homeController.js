import db from '../../models/index';
const { Op } = require('sequelize');

const getHome = async (req, res) => {
  const data_ALLPro = await db.Product.findAll();
  const data_Sale = await db.Product.findAll({
    where: {
      category_id: 1
    }
  });
  const data_Bestsellers = await db.Product.findAll({
    where: {
      category_id: 2
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
    return res.render('client/home.ejs', {data_ALLPro, data_Sale, data_Bestsellers,data_VHVN, data_VHNG});
  }


module.exports = {
    getHome: getHome
}