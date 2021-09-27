export const signin = (email, password) => {
  console.log(email, password);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
};

export const signout = () => {
  return firebase.auth().signOut();
};
