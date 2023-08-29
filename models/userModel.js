// const con = require('../config/config');

// function searchwithusertype(usertype,callback){
//    // const searchTerm = req.query.user_type;
//     con.query('SELECT * FROM users WHERE user_type LIKE ?', [`%${usertype}%`], (error, result) => {
//         if (error) {
//           callback(error, null);
//         } else {
//           callback(null, result);
//         }
//       });
// }


// function sortbyname(name,callback){
//     con.query('SELECT * FROM users ORDER BY name ASC', [name], (error,result) => {
//         if (error) {
//             callback(error, null);
//           } else {
//             callback(null, result);
//           }
//     })
// }

// module.exports = {
//     searchwithusertype,
//     sortbyname
// };
const con = require('../config/config');


function searchwithusertype(usertype, callback) {
    con.query('SELECT * FROM myusers WHERE user_type LIKE ?', [`%${usertype}%`], (error, result) => {
      if (error) {
        console.error('Database error:', error); // Log the error
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }
  
  function sortbyname(name, callback) {
    con.query('SELECT * FROM myusers ORDER BY name ASC', [name], (error, result) => {
      if (error) {
        console.error('Database error:', error); // Log the error
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }
  
  module.exports = {
    searchwithusertype,
    sortbyname
  }