const updateUserProfile = async (db, data) => {
  try {
    if (!data.userId)
      return {
        error: "No UserID provided. Please provide a valid UserID.",
        success: false
      };

    let ref = db.doc(`users/${data.userId}`);
    delete data.userId;

    await ref.set(data, { merge: true });

    return data;
  } catch (error) {
    return { error };
  }
};

module.exports = updateUserProfile;
