let type = 1;

function validate() { 
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let returnValue = true;
    if(email==""){
      document.getElementById("eml").innerHTML = "field is empty";
        returnValue = false;
    }

    if(pwd==""){
        document.getElementById("pd").innerHTML = "field is empty";
          returnValue = false;
      }
    
      return returnValue;
}

function clearEmail(){
    let email = document.getElementById("email").value;
    if(email!=""){
        document.getElementById("eml").innerHTML =""
    }
}
function clearPwd(){
    let pwd = document.getElementById("pwd").value;
    if(pwd!=""){
        document.getElementById("pd").innerHTML =""
    }
}