/* 
    Logout
-----------------*/

function handleLogout(e) {
    e.preventDefault();

    localStorage.removeItem("user");
  
    if (!localStorage.getItem("user")) {
       setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    }
  }

  //if the user already logged in redirect to home page
function checkUserNotFound() {
    if (!localStorage.getItem("user")) {
 
         window.location.href = "login.html";
     }
  }

  checkUserNotFound();