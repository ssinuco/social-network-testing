import { signout } from "../lib/firebase.js";

export const home = () => {
  const divHome = document.createElement("div");
  const viewHome = `<h1>Bienvenido ${localStorage.getItem('username')}</h1>
  <button id="logout">Logout</button>`;
  divHome.innerHTML = viewHome;

  const logoutBtn = divHome.querySelector("#logout");
  logoutBtn.addEventListener("click", () => {
    signout().then(() => {
      window.location.hash = '#/login';
    });
  });

  return divHome;
};
