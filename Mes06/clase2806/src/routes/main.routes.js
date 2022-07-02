let {Router} = require ('express');
let router = Router();

let { home } = require('../controllers/main');
router.get('/', home);

let { cart } = require("../controllers/main");
router.get("/cart", cart);


module.exports = router;