let express = require("express");
let app = express();
let path = require("path");
const port = process.env.PORT || 2020;

app.set("view engine", "ejs");

const public = path.resolve(__dirname, "public");
app.use(express.static(public));

app.listen(3000, () => console.log("Listening on https://localhost:" + port));
// app.get("/", (req, res) =>
//   res.sendFile(path.resolve(__dirname, "./views/home.html"))
// );
