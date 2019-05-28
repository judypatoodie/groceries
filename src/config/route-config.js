module.exports = {
  init(app){
    const groceryRoutes = require("../routes/groceries");
    const userRoutes = require("../routes/users");

    app.use(groceryRoutes);
    app.use(userRoutes);
  }
}
