const api = require("../../db/api");

const getBartenderById = async (req, res) => {
  try {
    let result = await api.getBartenderById(req.params.id);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getBartenderById;
