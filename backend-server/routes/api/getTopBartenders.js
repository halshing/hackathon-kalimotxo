const api = require("../../db/api");

const getTopBartenders = async (req, res) => {
  try {
    let result = await api.getTopBartenders();
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getTopBartenders;
