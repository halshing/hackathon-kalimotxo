const api = require("../../db/api");

// POST request
const saveRating = async (req, res) => {
  try {
    let result = await api.saveRating(req.body);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = saveRating;
