// Connect to database
const auth = require("../../db").auth;
const db = require("../../db").firestore();

// Database endpoints
const createUser = require("./createUser");
const signIn = require("./signIn");
const signOut = require("./signOut");
const getCurrentUser = require("./getCurrentUser");
const updateUserProfile = require("./updateUserProfile");
const getCustomerById = require("./getCustomerById");
const getBartenderById = require("./getBartenderById");
const getAllBartenders = require("./getAllBartenders");
const saveRating = require("./saveRating");
const getRatingsByBartenderId = require("./getRatingsByBartenderId");
const getRatingsByCustomerId = require("./getRatingsByCustomerId");
const getTopBartenders = require("./getTopBartenders");
const getAllRatings = require("./getAllRatings");
const searchLocation = require("./searchLocation");

module.exports = {
  createUser: data => createUser(auth, db, data),
  signIn: data => signIn(auth, db, data),
  signOut: () => signOut(auth),
  getCurrentUser: () => getCurrentUser(auth),
  updateUserProfile: data => updateUserProfile(db, data),
  getCustomerById: data => getCustomerById(db, data),
  getBartenderById: data => getBartenderById(db, data),
  getAllBartenders: data => getAllBartenders(db, data),
  saveRating: data => saveRating(db, data),
  getRatingsByBartenderId: data => getRatingsByBartenderId(db, data),
  getRatingsByCustomerId: data => getRatingsByCustomerId(db, data),
  getTopBartenders: data => getTopBartenders(db, data),
  getAllRatings: data => getAllRatings(db, data),
  searchLocation: data => searchLocation(data)
};
