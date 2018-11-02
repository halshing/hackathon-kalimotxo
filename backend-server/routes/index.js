const router = require("express").Router();

const createUser = require("./api/createUser");
const signIn = require("./api/signIn");
const signOut = require("./api/signOut");
const currentUser = require("./api/currentUser");
const updateUserProfile = require("./api/updateUserProfile");
const getUserById = require("./api/getUserById");

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

// Get User by Id
router.get("/getUserById/:userId", getUserById);

module.exports = router;
