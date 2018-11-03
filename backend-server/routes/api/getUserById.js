const api = require("../../db/api");

// GET request
const getUserById = async (req, res) => {
  try {
    let result = await api.getUserById(req.params.id);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getUserById;
