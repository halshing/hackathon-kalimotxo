const { UserId, UserType } = require("../../constants/FieldNames");

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
    if (query.empty) return { message: "No Bartender was found!" };
    // TO DO: also query the associated ratings for the bartender. When the response is sent, a
    // list of ratings for that bartender should also be included
    return { user: query.docs[0].data() };
  } catch (error) {
    return { error };
  }
};

module.exports = getBartenderById;
