import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.patch("/:id", protect, updateOrder);
router.delete("/:id", protect, deleteOrder);

export default router;