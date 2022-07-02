const {Router} = require ('express');
const { home } = require ('../controllers/main');
const routes = Router();


routes.get ('/', home);

module.exports = routes;