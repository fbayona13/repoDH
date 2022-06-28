let {resolve} = require ('path')

module.exports = {
  home: (req, res) => res.render('index.ejs'),
  cart: (req, res) => res.render('cart.ejs'),
};