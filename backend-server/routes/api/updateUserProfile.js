const api = require("../../db/api");

// POST request
const updateUserProfile = async (req, res) => {
  try {
    let result = await api.updateUserProfile(req.body);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = updateUserProfile;
