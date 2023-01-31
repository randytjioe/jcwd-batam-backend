const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

const { authRoute, eventRoute } = require("./routes");

const db = require("./models");
// db.sequelize.sync({ alter: true });
app.use("/auth", authRoute);
app.use("/events", eventRoute);

app.use("/proof", express.static(`${__dirname}/public`));
app.use("/images", express.static(`${__dirname}/assets`));

app.listen(PORT, () => {
  console.log(`API IS RUNNING ON PORT ${PORT}`);
});
