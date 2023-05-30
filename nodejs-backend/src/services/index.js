const users = require("./users/users.service.js");
const products = require("./products/products.service.js");
const orders = require("./orders/orders.service.js");
const cart = require("./cart/cart.service.js");
const blog = require("./blog/blog.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(orders);
  app.configure(cart);
  app.configure(blog);
  // ~cb-add-configure-service-name~
};
