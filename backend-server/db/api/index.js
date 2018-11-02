// Connect to database
const auth = require("../../db").auth;
const db = require("../../db").firestore();

// Database endpoints
const createUser = require("./createUser");
// const signInUser = require("./signInUser");
// const signOutUser = require("./signOutUser");
// const getCurrentUser = require("./getCurrentUser");
// const updateUserProfile = require("./updateUserProfile");

module.exports = {
    createUser: data => createUser(auth, db, data),
    // signInUser: data => signInUser(auth, data),
    // signOutUser: () => signOutUser(auth),
    // getCurrentUser: () => getCurrentUser(auth),
    // updateUserProfile: data => updateUserProfile(db, data)
};