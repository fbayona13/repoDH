let { resolve } = require("path");
let public = resolve(__dirname, "../public");

module.exports = express.static(public);
