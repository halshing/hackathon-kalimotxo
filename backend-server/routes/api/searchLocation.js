const api = require("../../db/api");

// POST request
const searchLocation = async (req, res) => {
  try {
    let result = await api.searchLocation(req.body.query);
    console.log(result);
    result = result.json.results;
    res.json({ result });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = searchLocation;
