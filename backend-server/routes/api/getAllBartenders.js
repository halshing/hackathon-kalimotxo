const api = require("../../db/api");

const getAllBartenders = async (req, res) => {
  try {
    let result = await api.getAllBartenders(); // what info would we want to pass in the request here?
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getAllBartenders;
