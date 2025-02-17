import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxf6Irh_gFbZn_0GbVost6w5PBHAvdwmM",
  authDomain: "krissaco-koyya.firebaseapp.com",
  projectId: "krissaco-koyya",
  storageBucket: "krissaco-koyya.firebasestorage.app",
  messagingSenderId: "746146843828",
  appId: "1:746146843828:web:91e9d6f4d6b50c69efdbe1",
  measurementId: "G-WWV0RJ8TBC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const jobs = [
//   {
//     title: "Sales & Marketing Executive",
//     location: "Bengaluru",
//     education: "B.Sc in Agriculture/Horticulture or B.Tech in Agri Engg",
//     experience: "0-2 years",
//     responsibilities: [
//       "Achieve sales targets and grow business",
//       "Promote and sell tech-driven services to Agri sector",
//       "Develop and maintain relationships with customers",
//       "Conduct market research",
//       "Connect with trade fairs and institutional players",
//       "Assist in product demonstrations and customer support",
//       "Assist in executing marketing campaigns",
//       "Assist in sales strategies",
//     ],
//     requirements: [
//       "Proficiency in English communication",
//       "Proficiency in speaking in Kannada",
//       "Proficiency in Excel (intermediate)",
//       "Exposure to designing skills (Figma/Canva) (desired)",
//       "Exposure to digital marketing concepts (desired)",
//       "Willingness to travel and meet clients onsite",
//       "Attention to details and results",
//       "Ability to work independently",
//     ],
//     email: "positions@koyya.in",
//   },
//   {
//     title: "IoT Interns Online",
//     location: "Online",
//     education: "B.Tech in ECE/IT/CSE",
//     experience: "Undergraduates",
//     responsibilities: [
//       "Conducting technical research",
//       "Participating in PoC initiatives",
//       "Supporting in component procurement",
//       "Supporting in assembly",
//       "Supporting in software development",
//       "Supporting in verification",
//       "Developing documentation",
//     ],
//     requirements: [
//       "Proficiency in English communication",
//       "Attention to details and results",
//       "Ability to work independently",
//       "Exposure to IoT technology",
//       "Prior experience in building IoT solutions is desired",
//     ],
//     email: "positions@koyya.in",
//   },
// ];

// const uploadJobs = async () => {
//   try {
//     const jobsCollection = collection(db, "jobs"); // "jobs" is the Firestore collection
//     for (const job of jobs) {
//       await addDoc(jobsCollection, job);
//     }
//     console.log("Jobs uploaded successfully!");
//   } catch (error) {
//     console.error("Error uploading jobs: ", error);
//   }
// };

// uploadJobs();

export default app; // Export the initialized Firebase app for use in other components.
