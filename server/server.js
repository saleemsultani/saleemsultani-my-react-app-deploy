// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import cors from "cors";
// import path from "path";

// const app = express();

// // Config .env
// dotenv.config();

// // middlewares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));
// // app.use(express.static(path.join(__dirname, "./client/build")));

// // connect Database
// connectDB();

// //routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

// // // rest api
// // app.use("*", function (req, res) {
// //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// // });

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(
//     `server is running in ${process.env.DEV_MODE} mode on port ${PORT}`
//   );
// });

// for deploying
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
connectDB();

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Export for Vercel serverless handler
export default app;
