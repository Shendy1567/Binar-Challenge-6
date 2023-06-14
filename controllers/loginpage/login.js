const credentials = require("../../login_data/users.json")

module.exports = class UserLogin {
  async loginPage(req, res) {
    if(req.session.User) {

      const{role} = req.session.User;

      if(role == 'superuser') {
      return res.redirect("/admin")
      } else if (role == 'user')  {
        return res.redirect("/game")
      }
    }
    res.render("loginpage")
  };

  async doLogin(req, res) {
    const {username, password} = req.body;

    const findIndex = credentials.findIndex((credential) => {
      return credential.username == username && credential.password == password;
    });

    if (findIndex == -1) {
      return res.redirect("/login")
    };

    const userLogin = credentials[findIndex];

    req.session.User = userLogin;

    if (userLogin.role == 'superuser') {
      return res.redirect("/admin")
    } else if (userLogin.role == 'user') {
      return res.redirect("/game")
    }
  };

  async userLogin(req, res) {
    res.redirect("/game")
  };

  async adminLogin(req, res) {
    const{role} = req.session.User;
    if(role != 'superuser' ) {
      return res.redirect("/login")
    }

    res.redirect("/admin")
  }

  async logout(req, res) {
    req.session.destroy(() => {
      return res.redirect("/login")
    });
  }
}