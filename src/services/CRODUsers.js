import db from '../models/index';

let creatNewUsers = (data, img) => {
    return new Promise(async (resolve, reject) => {
      try {
        await db.User.create({
          email: data.email,
          password: data.password,
          role: data.role,
          img: img,
        });
        resolve('');
      } catch (err) {
        reject(err);
      }
    });
  };

  let removeUser = (id) => {
    return new Promise(async (resolve, reject)=> {
      try{
        await db.User.destroy({
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

  let GetEditUser = (id) => {
    return new Promise (async (resolve, reject) => {
      try{
     let item =  await db.User.findOne({
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

  let PostEditUsers = (id,data, img) => {
    return new Promise(async (resolve, reject) => {
        try {
          const [affectedRows] = await db.User.update(
            {
              name: data.name,
              password: data.password,
              role: data.role,
              img: img,
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
  }


  module.exports = {
    creatNewUsers : creatNewUsers,
    removeUser: removeUser,
    GetEditUser: GetEditUser,
    PostEditUsers: PostEditUsers
  }