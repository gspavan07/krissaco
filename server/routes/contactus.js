import express from "express";
import { contact } from "../controllers/contactus.js";

const router = express.Router();

router.post("/contactus", contact);

export default router;
