module.exports = (req, res, next) => {
  if(!req.session.User) {
    return res.redirect("/login")
  }  
  if (req.session.User.role != 'superuser'){
    return res.redirect("/login/logout")
  }

  return next();
}