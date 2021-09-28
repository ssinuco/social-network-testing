export const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(
        (error)=> {
          let timer = 2;
          let code = error.code;
          switch (code) {
            case "auth/user-not-found":
              timer = 7;
              break;
            case "auth/wrong-password":
              timer = 5;
              break;
          }

          return Promise.reject(timer);
        }
      )
};

export const signout = () => {
  return firebase.auth().signOut();
};
