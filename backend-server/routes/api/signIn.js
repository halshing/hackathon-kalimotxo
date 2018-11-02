const api = require("../../db/api");

// POST request
const signIn = async (req, res) => {
  try {
    let result = await api.signIn(req.body);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = signIn;