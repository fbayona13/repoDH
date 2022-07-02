let { static } = require ('express');
let { resolve } = require("path");
let public = resolve(__dirname, "../public");

module.exports = static(public);
