
function validateform(){

    let username = document.getElementById("username");
    let  pwd = document.getElementById("pwd");

    if(username.value=="admin" && pwd.value=="12345")
            {
            return true;
            }
     else
     {
         alert("Invalid username or password");
         return false;
     }       
}
  