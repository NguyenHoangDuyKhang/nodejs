import db from '../models/index';

let creatNewproducts = (data, img) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Product.create({
        name: data.ten_san_pham,
        category_id: data.categories,
        price: data.price,
        sale_price: data.sale_price,
        img: img,
        descripstion: data.mo_ta,
      });
      resolve('');
    } catch (err) {
      reject(err);
    }
  });
};

let removeProducts = (id) => {
  return new Promise(async (resolve, reject)=> {
    try{
      await db.Product.destroy({
        where: {
          id : id
        }
      });
      resolve('');
    }catch (err){
      console.log(err);
    }
  })
}

  let GetEdit = (id) => {
    return new Promise (async (resolve, reject) => {
      try{
     let item =  await db.Product.findOne({
          where: {
            id: id
          }
        });
        if(item){
          resolve(item);
        } else{
          resolve('');
        }
      }catch(err){
        console.log(err);
      }
    })
  }

  let PostEdit = (id, data, img) => {
    return new Promise(async (resolve, reject) => {
      try {
        let updateData = {
          name: data.ten_san_pham,
          category_id: data.categories,
          price: data.price,
          sale_price: data.sale_price,
          descripstion: data.mo_ta
        };
  
        if (img) {
          updateData.img = img;
        }
  
        const [affectedRows] = await db.Product.update(updateData, {
          where: {
            id: id
          }
        });
  
        if (affectedRows > 0) {
          resolve('');
        } else {
          resolve('');
        }
      } catch (err) {
        console.log(err);
      }
    });
  };
module.exports = {
  creatNewproducts: creatNewproducts,
  removeProducts: removeProducts,
  GetEdit: GetEdit,
  PostEdit: PostEdit
};
