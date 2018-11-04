const getAllRatings = async (db, data) => {
  try {
    let ref = db.collection("ratings");
    let query = await ref
      .limit(100)
      .orderBy("createdDate", "desc")
      .get();
    if (query.empty) return { message: "No ratings found", success: false };

    let ratings = query.docs.map(doc => doc.data());
    return { ratings };
  } catch (error) {
    return { error };
  }
};

module.exports = getAllRatings;
