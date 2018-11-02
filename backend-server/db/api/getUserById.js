const getUserById = async (db, id) => {
  try {
    if (!id)
      return {
        error: "No UserID provided. Please provide a valid UserID.",
        success: false
      };

    let ref = db.doc(`users/${id}`);
    let user = await ref.get();
    if (!user.exists) return { message: "User does not exist!" };
    return { user: user.data() };
  } catch (error) {
    return { error };
  }
};

module.exports = getUserById;
