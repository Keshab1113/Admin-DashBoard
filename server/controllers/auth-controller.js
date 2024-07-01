const passport = require("passport");
require("../lib/passportLocal")(passport);


const login = async (req, res, next) => {
  console.log(req.body, 6)
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        success: false,
        msg: info.msg
      });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log(user);
      return res.json({
        success: true,
        msg: 'Login successful.',
        user
      });
    });
  })(req, res, next);
};
const logout = async (req, res) => {
  console.log("object,31")
  req.logout(err => {
    if (err) throw err;
    req.session.destroy(() => {
      res.clearCookie('app_name.sid');
      res.json({
        success: true,
        msg: 'Logout successful.'
      });
    })
  });

};


const checkAuth = (req, res) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}, status:${req.isAuthenticated()}`);
  if (req.isAuthenticated()) {
    res.json({ user: req.user, isAuthenticated: true });
  } else {
    res.json({ user: null, isAuthenticated: false });
  }
}
module.exports = { login, logout, checkAuth };






// const passport = require("passport");
// require("../lib/passportLocal")(passport);
// const login = async (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         msg: info.msg
//       });
//     }
//     req.login(user, (err) => {
//       if (err) {
//         return next(err);
//       }
//       console.log(user, 20)
//       return res.json({
//         success: true,
//         msg: 'Login successful.',
//         user
//       });
//     });
//   })(req, res, next);
// };
// const logout = async (req, res) => {
//   req.logout(err => {
//     if (err) throw err;
//     req.session.destroy()
//   });
//   res.json({
//     success: true,
//     msg: 'Logout successful.'
//   });
// }
// const checkAuth = (req, res) => {
//   if (req.isAuthenticated()) {
//     res.json({ user: req.user });
//   } else {
//     res.json({ user: null });
//   }
// }
// module.exports = { login, logout, checkAuth };
