const api = require("../../db/api");

const getAllRatings = async (req, res) => {
  try {
    let result = await api.getAllRatings();
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getAllRatings;
