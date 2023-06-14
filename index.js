const express = require("express");
const expressSession = require("express-session")
const app = express();
const models = require("./models");
const PORT = 3030;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
  secret: "12345"
}));

app.use(express.static('public'));

require('./controllers')(app)

models.sequelize.authenticate().then(() => {
  console.log("SERVER ON");
  app.listen(PORT, () => {
    console.log("server is running on port: " + PORT);
  })
})
.catch((err) => {
  console.log(err);
})
