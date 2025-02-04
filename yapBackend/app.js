const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "yapData", // Use the yapData database
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// API Endpoint to Submit Form Data
app.post("/contactForm", (req, res) => {
  const { name, email, message, interest, contactMethod } = req.body;

  const sql = `INSERT INTO contact_form (name, email, message, interest, contactMethod) 
               VALUES (?, ?, ?, ?, ?)`;
  const values = [name, email, message, interest, contactMethod];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ success: false, message: "Error submitting form" });
    }
    res.status(200).json({ success: true, message: "Form submitted successfully" });
  });
});

// Create the 'student_registration' table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS student_registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    fatherName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    society VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(createTableQuery, (err) => {
  if (err) {
    console.error("Error creating table:", err);
  } else {
    console.log('Table "student_registration" is ready');
  }
});

// Route to handle student registration
app.post("/register/student", (req, res) => {
  const { fullName, fatherName, email, phoneNumber, address, inSociety, society } = req.body;

  const checkEmailQuery = "SELECT email FROM student_registration WHERE email = ?";
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error("Database error while checking email:", err);
      return res.status(500).json({ message: "Database error while checking email" });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "This email is already registered!" });
    }

    const insertQuery = `
      INSERT INTO student_registration (
        fullName, fatherName, email, phoneNumber, address, inSociety, society
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [fullName, fatherName, email, phoneNumber, address, inSociety, society];

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error("Error inserting data into MySQL:", err);
        return res.status(500).json({ message: "Database error while inserting data" });
      }
      console.log("Data inserted successfully:", result);
      res.status(200).json({ message: "Student registration successful!" });
    });
  });
});

// API Endpoint to Submit Society Registration
app.post("/societyRegistration", (req, res) => {
  const { name, email, whatsappNumber, university, district, registeredAtYAP, motivation } = req.body;

  // Check if email already exists
  const checkEmailQuery = "SELECT * FROM society_registrations WHERE email = ?";
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }

    if (results.length > 0) {
      // Email already exists
      return res.status(400).json({ success: false, message: "Email is already registered." });
    }

    // If email does not exist, proceed with registration
    const insertQuery = `
      INSERT INTO society_registrations (
        name, email, whatsappNumber, university, district, registeredAtYAP, motivation
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [name, email, whatsappNumber, university, district, registeredAtYAP, motivation];

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ success: false, message: "Error submitting form" });
      }
      res.status(200).json({ success: true, message: "Registration successful!" });
    });
  });
});

// Endpoint to handle form submission
app.post("/volunteerapply", (req, res) => {
  const { full_name, email, contact_number, address, background, experience, skills, interests, availability_hours, preferred_time, motivation, expectations, domain } = req.body;

  // Check if email already exists
  db.query("SELECT * FROM volunteers WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length > 0) {
      return res.status(400).json({ error: "This email has already been used to apply." });
    }

    // Insert data if email does not exist
    const sql = `INSERT INTO volunteers 
          (full_name, email, contact_number, address, background, experience, skills, interests, availability_hours, preferred_time, motivation, expectations, domain)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [full_name, email, contact_number, address, background, experience, skills, interests, availability_hours, preferred_time, motivation, expectations, domain];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to submit application" });
      }
      res.status(200).json({ message: "Application submitted successfully" });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
