const getRatingsByBartenderId = async (db, id) => {
  try {
    let ref = db.collection("ratings");
    let query = await ref.where("bartenderId", "==", id).get();
    if (query.empty) return { message: "No ratings for that bartender found" };
    let ratings = query.docs.map(doc => doc.data());
    return { ratings }
  } catch (error) {
    return { error };
  }
};

module.exports = getRatingsByBartenderId;
