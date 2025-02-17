import express from "express";
import jobs from "../controllers/jobs.js";

const router = express.Router();

router.get("/jobs", jobs);

export default router;
