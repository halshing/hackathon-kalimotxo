const signOut = async auth => {
  return await auth.firebase().signOut();
};

module.exports = signOut;
