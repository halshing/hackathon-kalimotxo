const saveRating = async (db, data) => {
  try {
    let ref = await db.collection("ratings").add(data);
    return { ...data, ratingId: ref.id, createdDate: new Date().getTime() };
  } catch (error) {
    return { error };
  }
};

module.exports = saveRating;
