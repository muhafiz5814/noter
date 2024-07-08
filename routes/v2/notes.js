import { Router } from "express";

import { getNotes } from "../../controllers/v2/notes.js";

const router = Router()

router.get("/", getNotes)

export default router