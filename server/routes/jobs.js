import express from "express";
import jobs from "../controllers/jobs.js";

const router = express.Router();

router.post("/jobs", jobs);

export default router;
