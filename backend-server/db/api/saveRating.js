const saveRating = async (db, data) => {
  try {
    data = { ...data, createdDate: new Date().getTime() };
    let ref = await db.collection("ratings").add(data);
    return { ...data, ratingId: ref.id };
  } catch (error) {
    return { error };
  }
};

module.exports = saveRating;
