import admin from "firebase-admin";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serviceAccount = path.join(__dirname, "serviceAccountKey.json"); //Import the service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), //Use certificate based authentication
  databaseURL: "https://krissaco-koyya.firebaseio.com",
});
// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gollapalli.shanmukpavan@gmail.com", // Owner's email
    pass: "crgt ceku ofxo hyty", // Owner's email password or app password
  },
});

export const contact = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  // Firebase Admin SDK initialization

  // Store the data in Firebase (using Firestore)
  const db = admin.firestore();
  db.collection("contacts")
    .add({
      firstName,
      lastName,
      email,
      message,
    })
    .then(() => {
      // Send an email notification to the owner
      const mailOptions = {
        from: "shanmukpavan07.gollapalli@gmail.com",
        to: "shanmukpavan7.gollapalli@gmail.com", // Owner's email
        subject: "New Contact Form Submission",
        text: `You have received a new contact request from:\n\nName: ${
          firstName + " " + lastName
        }\nEmail: ${email}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res
            .status(500)
            .json({ message: "Error sending email", error });
        }
        res.status(200).json({ message: "Contact request sent successfully!" });
      });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error saving to Firebase", error: error.message });
    });
};
