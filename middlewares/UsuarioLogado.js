const session = require("express-session");

module.exports = (req, res, next) => {
  if (req.session.usuario == undefined) {
    return res.redirect("/adm/login")
  }

  next();
};