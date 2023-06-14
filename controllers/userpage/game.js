module.exports = (req, res) => {
  if(!req.session.User) {
    return res.redirect("/login")
  }
  res.render("gamepage")
}