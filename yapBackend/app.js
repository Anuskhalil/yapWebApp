const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./config/firebaseConfig"); // Import Firebase config

const app = express();
app.use(bodyParser.json());
app.use(cors());

// **Contact Form API**
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await db.collection("contacts").add({
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

// **Student Registration API**
app.post("/register", async (req, res) => {
  const { fullName, fatherName, cnic, email, studentId, subjectOfStudy, yearOfStudy, cellNumber1, cellNumber2, instituteName, residentialAddress, district, fieldOfInterest } = req.body;

  if (!fullName || !fatherName || !cnic || !email || !studentId || !subjectOfStudy || !yearOfStudy || !cellNumber1 || !instituteName || !residentialAddress || !district) {
    return res.status(400).json({ error: "All required fields must be filled" });
  }

  try {
    await db.collection("studentRegistrations").add({
      fullName,
      fatherName,
      cnic,
      email,
      studentId,
      subjectOfStudy,
      yearOfStudy,
      cellNumber1,
      cellNumber2,
      instituteName,
      residentialAddress,
      district,
      fieldOfInterest,
      submittedAt: new Date().toISOString(),
    });
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error saving student registration:", error);
    res.status(500).json({ error: "Failed to save registration." });
  }
});

// **Start the Server**
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
