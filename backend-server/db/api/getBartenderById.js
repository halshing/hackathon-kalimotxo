const { UserId, UserType } = require("../../constants/FieldNames");
const getRatings = require("./getRatingsByBartenderId");

const getBartenderById = async (db, id) => {
  try {
    if (!id)
      return {
        error: "No UserID provided. Please provide a valid UserID.",
        success: false
      };
    let ref = db.collection("users");
    let query = await ref
      .where(UserId, "==", id)
      .where(UserType, "==", "bartender")
      .limit(1)
      .get();
    if (query.empty) return { message: "No bartender was found!" };
    let ratings = await getRatings(db, id);
    return { user: query.docs[0].data(), ...ratings };
  } catch (error) {
    return { error };
  }
};

module.exports = getBartenderById;
