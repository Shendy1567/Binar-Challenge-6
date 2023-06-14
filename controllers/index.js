module.exports = (app) => {
  app.use('/', require("./userpage"))
  app.use('/login', require("./loginpage"))
  app.use('/admin', require("./superadminpage"))
  
}