import db from '../models/index';

let creatCategoris = (data,) => {
    return new Promise(async (resolve, reject) => {
      try {
        await db.Categori.create({
          name: data.name,
        });
        resolve('');
      } catch (err) {
        reject(err);
      }
    });
  };



let removeCategoris = (id) => {
    return new Promise(async (resolve, reject)=> {
      try{
        await db.Categori.destroy({
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
     let item =  await db.Categori.findOne({
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



  let PostEdit = (id, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const [affectedRows] = await db.Categori.update(
          {
            name: data.name
          },
          {
            where: {
              id: id
            }
          }
        );
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
    removeCategoris : removeCategoris,
    creatCategoris: creatCategoris,
    GetEdit: GetEdit,
    PostEdit: PostEdit
  }