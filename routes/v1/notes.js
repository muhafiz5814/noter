import { getNotes, createNote, getNoteById, deleteNote, updateNote } from "../../controllers/v1/notes.js";
import { authenticateUser } from "../../controllers/v1/auth.js";

import { Router } from "express";

import validator from "express-validator"
const {body} = validator

const router = Router()

router.get("/", authenticateUser, getNotes)

router.post("/", authenticateUser, body("title").exists(), body("isDraft").isBoolean(), createNote)

router.get("/:id", authenticateUser, getNoteById)

router.delete("/:id", authenticateUser, deleteNote)

router.patch("/:id", authenticateUser, updateNote)

export default router