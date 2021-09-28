import { signin } from "../src/lib/firebase.js";

const USERS = [
  {
    email: "test@elcorreo.it",
    password: "123456",
  },
];

global.firebase = {
  auth: () => {
    return {
      signInWithEmailAndPassword: (email, password) => {
        const user = USERS.find((user) => user.email === email);
        if (user) {
          if (user.password === password) {
            return Promise.resolve({ user });
          } else {
            return Promise.reject({ code: "auth/wrong-password" });
          }
        } else {
          return Promise.reject({ code: "auth/user-not-found" });
        }
      },
    };
  },
};

describe("signin", () => {
  it("esperamos 5sg para logins fallidos por contraseña", () => {
    return signin("test@elcorreo.it", "xxxx").catch((timer) => {
      expect(timer).toBe(5);
    });
  });

  it("esperamos 7sg para logins fallidos por contraseña", () => {
    return signin("uncorreo@noexiste.com", "123456").catch((timer) => {
      expect(timer).toBe(7);
    });
  });

  it("esperamos 2sg para logins fallidos por otro error", () => {
    return signin("test@elcorreo.it", "123456").catch((timer) => {
      expect(timer).toBe(2);
    });
  });
});
