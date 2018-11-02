const signIn = async (auth, data) => {
  return await auth
    .firebase()
    .signInWithEmailAndPassword(data.email, data.password);
};

module.exports = signIn;
