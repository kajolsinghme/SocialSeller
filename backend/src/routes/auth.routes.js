import express from "express";
import { signup, login, getMe } from "../controllers/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
import { signUpSchema, loginSchema } from "../validators/auth.validator.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", validate(signUpSchema), signup);
router.post("/login", validate(loginSchema), login);
router.get("/me", protect, getMe);


export default router;
