const router = require("express").Router();

const createUser = require("./api/createUser");
const signIn = require("./api/signIn");
const signOut = require("./api/signOut");
const currentUser = require("./api/currentUser");
const updateUserProfile = require("./api/updateUserProfile");
const getCustomerById = require("./api/getCustomerById");
const getBartenderById = require("./api/getBartenderById");
const getAllBartenders = require("./api/getAllBartenders");
const saveRating = require("./api/saveRating");
const getRatingsByBartenderId = require("./api/getRatingsByBartenderId");
const getRatingsByCustomerId = require("./api/getRatingsByCustomerId");
const getTopBartenders = require("./api/getTopBartenders");
const getAllRatings = require("./api/getAllRatings");
const searchLocation = require("./api/searchLocation");

// Create a new user
router.post("/createUser", createUser);

// Sign in an existing user
router.post("/signIn", signIn);

// Sign out current user
router.post("/signOut", signOut);

// Get currently logged in user
router.get("/currentUser", currentUser);

// Update user profile
router.post("/updateUserProfile", updateUserProfile);

// Get customer by id
router.get("/getCustomerById/:id", getCustomerById);

// Get bartender by id
router.get("/getBartenderById/:id", getBartenderById);

// Get all bartenders
router.get("/getAllBartenders", getAllBartenders);

// Save customer rating
router.post("/saveRating", saveRating);

// Get ratings by bartender id
router.get("/getRatingsByBartenderId/:id", getRatingsByBartenderId);

// Get ratings by customer id
router.get("/getRatingsByCustomerId", getRatingsByCustomerId);

// Get top bartenders
router.get("/getTopBartenders", getTopBartenders);

// Get all ratings
router.get("/getAllRatings", getAllRatings);

// Search location for geo coordinates
router.post("/searchLocation", searchLocation);

module.exports = router;
