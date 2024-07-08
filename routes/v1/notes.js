import { getNotes, createNote, getNoteById, deleteNote, updateNote } from "../../controllers/v1/notes.js";

import { Router } from "express";

import validator from "express-validator"
const {body} = validator

const router = Router()

router.get("/", getNotes)

router.post("/", body("title").exists(), body("isDraft").isBoolean(), createNote)

router.get("/:id", getNoteById)

router.delete("/:id", deleteNote)

router.patch("/:id", updateNote)

export default router