import { Router } from "express";
import { loginUser } from "../../controllers/v1/auth.js";

const router = Router()

router.post("/", loginUser)

export default router