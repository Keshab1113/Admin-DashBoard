const profile = require("../models/profile");
const bcryptjs = require("bcryptjs");
var localStrategy = require("passport-local").Strategy;



module.exports = function (passport) {

  passport.use(
    new localStrategy({ usernameField: "email" }, (email, password, done) => {
      profile.findOne({ email: email }, { addedBy: 0 })
        .then(data => {

          if (!data) {
            return done(null, false, { msg: "User Doesn't Exist !" });
          }

          bcryptjs.compare(password, data.pwdHash, (err, match) => {
            if (err) {
              console.log(`error:${err}`)

              return done(null, false, { msg: err });
            }
            if (!match) {

              return done(null, false, { msg: "Password Doesn't match !" });
            }
            if (match) {
              const obj = {
                id: data._id,
                role: data.role,
                user: data.user,
                email: data.email,
              }
              return done(null, obj);
            }
          });
        })
        .catch((err) => {
          console.log(err)
        })

    })
  );

  passport.serializeUser(function (user, done) {
    console.log(user,48)
    done(null, { id: user.id });
  });

  passport.deserializeUser(function (id, done) {
    console.log(id,51)
    profile.findById(id.id)
      .then(user =>
        done(null, user))
      .catch(err => console.log(err))


  });
};





// const profile = require("../models/profile");
// const bcryptjs = require("bcryptjs");
// var localStrategy = require("passport-local").Strategy;



// module.exports = function (passport) {

//   passport.use(
//     new localStrategy({ usernameField: "email" }, (email, password, done) => {
//       profile.findOne({ email: email }, { addedBy: 0 })
//         .then(data => {

//           if (!data) {
//             return done(null, false, { msg: "User Doesn't Exist !" });
//           }

//           bcryptjs.compare(password, data.pwdHash, (err, match) => {
//             if (err) {
//               console.log(`error:${err}`)

//               return done(null, false, { msg: err });
//             }
//             if (!match) {

//               return done(null, false, { msg: "Password Doesn't match !" });
//             }
//             if (match) {
//               const obj = {
//                 id: data._id,
//                 role: data.role,
//                 user: data.user,
//                 email: data.email,
//               }
//               return done(null, obj);
//             }
//           });
//         })
//         .catch((err) => {
//           console.log(err)
//         })

//     })
//   );

//   passport.serializeUser(function (user, done) {
//     done(null, { id: user.id });
//   });

//   passport.deserializeUser(function (id, done) {
//     console.log(id, 51)
//     profile.findById(id.id)
//       .then(user =>
//         done(null, user))
//       .catch(err => console.log(err))


//   });
// };