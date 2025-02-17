import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import jobs from "./routes/jobs.js";
import contacts from "./routes/contactus.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
// // Serve sclient
// app.use(express.static(path.join(__dirname, "client", "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.use("/api", jobs);
app.use("/api", contacts);
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
