const { UserType } = require("../../constants/FieldNames");
const getAllBartenders = async (db, data) => {
  try {
    let ref = db.collection("users");
    let query = await ref.where(UserType, "==", "bartender").get();
    if (query.empty) return { message: "No bartenders found!" };
    let users = query.docs.map(doc => doc.data());
    return { users };
  } catch (error) {
    return { error };
  }
};

module.exports = getAllBartenders;
