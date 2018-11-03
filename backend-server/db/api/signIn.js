const signIn = async (auth, db, data) => {
  try {
    let result = await auth
      .firebase()
      .signInWithEmailAndPassword(data.email, data.password);
    let ref = db.doc(`users/${result.user.uid}`);
    let user = await ref.get();
    if (!user.exists) return { message: "User does not exist!" };
    return { user: user.data() };
  } catch (error) {
    return { error };
  }
};

module.exports = signIn;
