import Express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// Router Object
const router = Express.Router();

// routing

// REGISTER || METHOD POST
router.post("/register", registerController);

// Login
router.post("/login", loginController);

// Forgot Password
router.post("/forgot-password", forgotPasswordController);

// Test
router.get("/test", requireSignIn, isAdmin, testController);

// Protected user routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected admin routes
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
