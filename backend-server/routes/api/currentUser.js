const api = require("../../db/api");

// GET request
const currentUser = async (req, res) => {
  try {
    let result = await api.getCurrentUser();
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = currentUser;
