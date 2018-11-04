const api = require("../../db/api");

// GET request
const getCustomerById = async (req, res) => {
  try {
    let result = await api.getCustomerById(req.params.id);
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = getCustomerById;
