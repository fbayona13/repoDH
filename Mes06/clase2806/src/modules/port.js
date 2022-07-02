let port = process.env.PORT || 3000;
let start = () => console.log("Server start at localhost:" + port);

module.exports = {
    port,
    start
}