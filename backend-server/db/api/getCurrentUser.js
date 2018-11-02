const getCurrentUser = auth => {
  return new Promise((resolve, reject) => {
    auth.firebase().onAuthStateChanged(user => {
      if (user) resolve(user);
      else reject({ message: "No user found" });
    });
  });
};

module.exports = getCurrentUser;
