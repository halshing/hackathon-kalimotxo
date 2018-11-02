const api = require("../../db/api");

// POST request
const signOut = async (req, res) => {
  try {
    await api.signOutUser();
    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = signOut;
