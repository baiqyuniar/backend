const express = require("express"); //inisialisasi biar bisa pakai express library
const bodyParser = require("body-parser"); //buat parse request dan bikin objek req.body
const cors = require("cors"); // buat menyediakan Express middleware buat mengaktifkan cors
const app = express(); //biar tiap pakai "app" bisa akses ke librarynya express
var corsOptions = {
  origin: "http://localhost:3002",
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); //parse requests content-type - application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); //parse requests content-type - application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
}); //kalau akses ke "localhost:3001/" nanti bakal dikasi respon tampilan message

require("./app/routes/auth.route.js")(app);
require("./app/routes/user.route.js")(app);

const PORT = process.env.PORT || 3001; //set listening port > env.PORT buat production, port 3001 buat development
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and resync DB");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });
}
