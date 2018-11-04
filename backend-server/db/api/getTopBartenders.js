const getTopBartenders = async (db, data) => {
  try {
    let ref = db.collection("users");
    let query = await ref
      .where("userType", "==", "bartender")
      .orderBy("overallRating", "desc")
      .limit(10)
      .get();
    if (query.empty) return { message: "No bartenders found!", success: false };
    let users = query.docs.map(doc => doc.data());
    return { users };
  } catch (error) {
    return { error };
  }
};

module.exports = getTopBartenders;
