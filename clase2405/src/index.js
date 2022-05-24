let express = require("express");
let app = express();
let path = require("path");

const public = path.resolve(__dirname, "../public");
app.use(express.static(public));

app.listen(3000, () => console.log("Esto fue existoso"));
app.get("/", (req, res) => res.send('Hola mundo'));