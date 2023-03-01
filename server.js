const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const port = process.env.PORT;
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/", userRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
