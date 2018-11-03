const saveRating = async (db, data) => {
  try {
      let ref = db.collection('ratings').add(data)
  } catch (error) {
    return { error };
  }
};
