const express = require("express");
const dotenv = require("dotenv");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// body parser
dotenv.config();
const app = express();
app.use(express.json());

// root level of API roots
app.use("/api", productRouter.router);
app.use("/api", userRouter.router);

// Binding server to a port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
