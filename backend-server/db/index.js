const firebase = require("firebase");
const admin = require("firebase-admin");
const serviceAccount = require("../config/serviceAccountKey.json");

// Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBcLktjNns_EY7hM8iY5jHl9UA0JnHi35E",
    authDomain: "bartender-app-1735d.firebaseapp.com"
});

// Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL
});
admin.firestore().settings({ timestampsInSnapshots: true });

module.exports = {
    auth: {
        firebase: firebase.auth,
        admin: admin.auth
    },
    firestore: admin.firestore
};