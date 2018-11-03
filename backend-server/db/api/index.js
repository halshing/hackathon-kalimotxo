// Connect to database
const auth = require("../../db").auth;
const db = require("../../db").firestore();

// Database endpoints
const createUser = require("./createUser");
const signIn = require("./signIn");
const signOut = require("./signOut");
const getCurrentUser = require("./getCurrentUser");
const updateUserProfile = require("./updateUserProfile");
const getUserById = require("./getUserById");
const getBartenderById = require("./getBartenderById");
const getAllBartenders = require("./getAllBartenders");

module.exports = {
  createUser: data => createUser(auth, db, data),
  signIn: data => signIn(auth, db, data),
  signOut: () => signOut(auth),
  getCurrentUser: () => getCurrentUser(auth),
  updateUserProfile: data => updateUserProfile(db, data),
  getUserById: data => getUserById(db, data),
  getBartenderById: data => getBartenderById(db, data),
  getAllBartenders: data => getAllBartenders(db, data)
};
