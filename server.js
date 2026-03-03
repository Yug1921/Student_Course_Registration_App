const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/users"));
app.use("/cart", require("./routes/cart"));
app.use("/orders", require("./routes/orders"));

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
