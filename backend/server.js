const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
require("colors");
const products = require("./data/products");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoute");
const cors = require("cors");
const usersRoutes = require("./routes/UsersRoute");
const orderRoutes = require("./routes/orderRoute");
const manRoute = require("./routes/manRoute");
const path = require("path");

//dotenv config
dotenv.config();

//connecting to mongodb database
connectDb();
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "forntend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Welcome to Node Server</h1>");
  });
}

app.use("/api", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hireman", manRoute);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`
      .inverse
  );
});
