const admin = require("firebase-admin");
const fs = require("fs");
require("dotenv").config();
const firebaseConfigPath = process.env.FIREBASE_CONFIG;

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfigPath),
  databaseURL: "https://yapdata-46918.firebaseio.com", // For Realtime Database (optional for Firestore)
  storageBucket: "yapdata-46918.firebasestorage.app", // Replace with your Firebase Storage bucket URL
});

const db = admin.firestore(); // Use Firestore
const storage = admin.storage().bucket();
module.exports = { db, storage };
