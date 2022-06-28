const fs = require ("fs")
const admin = require("./admin.js")
const data = fs.readFileSync("tareas.json")
let tareas = JSON.parse(data)

admin(process.argv[2], tareas)