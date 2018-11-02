const api = require("../../db/api");

// POST request
const createUser = async (req, res) => {
  try {
    let result = await api.createUser(req.body);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = createUser;
