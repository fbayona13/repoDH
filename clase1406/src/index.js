let express = require("express");
let app = express();
let path = require("path");
const port = process.env.PORT || 2020;
const callback = () => console.log('server started at localhost:' + port);

app.listen(port, callback);

const public = path.resolve(__dirname, "../public");
app.use(express.static(public));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/login.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
);
