// Connect to database
const auth = require("../../db").auth;
const db = require("../../db").firestore();

// Database endpoints
const createUser = require("./createUser");
const signIn = require("./signIn");
const signOut = require("./signOut");
const getCurrentUser = require("./getCurrentUser");
const updateUserProfile = require("./updateUserProfile");

module.exports = {
    createUser: data => createUser(auth, db, data),
    signIn: data => signIn(auth, data),
    signOut: () => signOut(auth),
    getCurrentUser: () => getCurrentUser(auth),
    updateUserProfile: data => updateUserProfile(db, data)
};