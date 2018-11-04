const api = require("../../db/api");

// GET request
const getRatingsByCustomerId = async (req, res) => {
    try {
        let result = await api.getRatingsByCustomerId(req.params.id);
        res.json({ result });
    } catch (error) {
        res.json({ error });
    }
};

module.exports = getRatingsByCustomerId;
