import express from "express";
import {
  createOrder,
  getOrders,

} from "../controllers/order.controller.js";
import protect from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { createOrderSchema } from "../validators/order.validator.js";

const router = express.Router();

router.post("/", protect, validate(createOrderSchema), createOrder);
router.get("/", protect, getOrders);
// router.patch("/:id", protect, updateOrder);
// router.delete("/:id", protect, deleteOrder);

export default router;