const api = require("../../db/api");

// GET request
const getRatingsByBartenderId = async (req, res) => {
  try {
    let result = await api.getRatingsByBartenderId(req.params.id);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getRatingsByBartenderId;
