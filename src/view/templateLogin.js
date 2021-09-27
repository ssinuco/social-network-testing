import { signin } from "../lib/firebase.js";

const disableLoginButton = (time) => {
  let timeleft = time;
  
  const loginBtn = document.querySelector("#loginEmailAndPass");
  loginBtn.disabled = true;

  let timerP = document.getElementById("timer");
  timerP.style.display = 'block';

  let secondsP = document.getElementById("seconds");
  secondsP.innerHTML = timeleft;
  
  let downloadTimer = setInterval(function(){
    if(timeleft == 0){
      loginBtn.disabled = false;
      timerP.style.display = 'none';                
    }
    else if(timeleft < 0){
      clearInterval(downloadTimer);
    }
    secondsP.innerHTML = timeleft;

    timeleft -= 1;

  }, 1000);
}

export const login = () => {
  const totalFailedLoginAttempts = 0;

  const divLogin = document.createElement("div");
  divLogin.setAttribute("class", "divLogin");

  const viewLogin = `
    <div class="logo-login">
    <h1>Visibles</h1>
    <img src="./images/invisibles.svg" height="50" width="50"> 
    </div>
      <div class="section-login">    
       <div class="input-group">
        <input type="email" id="loginEmail" placeholder="E-mail">
        <input type="password" name="" id="loginPass" placeholder="Contraseña">
       </div>
       <button class="btn-register" id='loginEmailAndPass'> Inicia sesión </button>
       <p id="timer"><span id="seconds">0</span> sg para el siguiente intento</p>
       <div class="line">
          <div class="line-one">
          </div>
          <p>o ingresa con</p>
          <div class="line-two">
          </div>
       </div>
       <img src= "./images/logo-google.png" id='loginGoogle'></img>
          <div class="link-account">
           <p> ¿No tienes cuenta? </p><a href="#/signin">Registrate</a>
      </div>
       <h3 id='unverifiedEmail'></h3>
      </div> 
      `;
  divLogin.innerHTML = viewLogin;

  const loginBtn = divLogin.querySelector("#loginEmailAndPass");
  loginBtn.addEventListener("click", () => {
    const email = divLogin.querySelector("#loginEmail").value;
    const password = divLogin.querySelector("#loginPass").value;
    signin(email, password)
      .then((userCredentials) => {
          localStorage.setItem("username", userCredentials.user.displayName);
          window.location.hash = "#/home";
      })
      .catch((error) => {
        let code = error.code;
        switch (code) {
          case "auth/wrong-password":
            disableLoginButton(3);
            break;
          case "auth/user-not-found":
            disableLoginButton(6);
            break;
        }
      });
  });
  return divLogin;
};
