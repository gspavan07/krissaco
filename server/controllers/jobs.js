import app from "../config/firebase.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const jobs = async (req, res) => {
  const db = getFirestore(app);
  try {
    const jobsCollection = collection(db, "jobs"); // Firestore collection reference
    const querySnapshot = await getDocs(jobsCollection);
    const jobs = [];
    querySnapshot.forEach((doc) => {
      jobs.push({ id: doc.id, ...doc.data() }); // Store job data with document ID
    });
    return res.json({ jobs }).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default jobs;
