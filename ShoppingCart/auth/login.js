/* 
    Login
----------------- */



const SuccessMessage = document.getElementById("successMessage");

function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ email, password }));
  if (localStorage.getItem("user")) {
    SuccessMessage.classList.add("show");
    setTimeout(()=>{
      window.location.href = "../index.html";
      SuccessMessage.classList.remove("show");
    },2000)
        

}
}


//if the user already logged in redirect to home page
function checkUserLoggedIn() {
  if (localStorage.getItem("user")) {
     window.location.href = "../index.html";
}
}
checkUserLoggedIn();