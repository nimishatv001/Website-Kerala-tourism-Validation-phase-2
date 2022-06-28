
function validate(){
    
    let returnValue = true;
    let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;  
let Pnr = document.getElementById("Pnr").value
let email = document.getElementById("email").value;
let pswd = document.getElementById("pswd").value;
let cpwd = document.getElementById("cpwd").value;
    returnValue = passwordMatch();
    if(fname == ""){
        document.getElementById('fn').innerHTML = "** Please fill the first name field";    
        returnValue = false;    
    }
    if(lname == ""){
        document.getElementById('ln').innerHTML = "** Please fill the last name field";
        returnValue = false;
    }
    if(Pnr == ""){
        document.getElementById('PN').innerHTML = "** Please fill the phone number field";
        document.getElementById('PN').style.color = "red";
        returnValue = false;
    }

    if(email == ""){
        document.getElementById('eml').innerHTML = "** Please fill the phone number field";
        document.getElementById('eml').style.color = "red";
        returnValue = false;
    }
    if(pswd == ""){
        document.getElementById('strength').innerHTML = "** Please fill the Password field";
        document.getElementById('strength').style.color = "red";
        returnValue = false;
    }
    if(cpwd == ""){
        document.getElementById('cpd').innerHTML = "** Please fill the Confirm Passsword field";
        document.getElementById('cpd').style.color = "red";
        returnValue = false;
    }

    returnValue = passwordChanged();
    returnValue = emailCheck();


   return returnValue;
}

function passwordChanged() {
    
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");
    var pwd = document.getElementById("pswd");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
        return false;
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML =' <span style="color:green">Strong!</span>';
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
        return false;
    } else {
        strength.innerHTML = '<span style="color:red">weak!</span>';
        return false;
    }
}



function emailCheck(){ 

    let email = document.getElementById("email");
let error = document.getElementById("error");
let emlerror = document.getElementById("eml");
    let regxp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (email != "") {
        emlerror.innerHTML = "";
    }
    if(regxp.test(email.value)){
        error.innerHTML = "You have provide Valid Email Id";
        error.style.color = "green";
        error.style.fontSize = "15px";
        return true;
    }
    else{
        error.innerHTML = "*** Sorry Incorrect Email ID";
        error.style.color = "Red";
        error.style.fontSize = "15px";
        return false;
    }

}

function  passwordMatch(){
    
   if(document.getElementById('pswd').value == document.getElementById('cpwd').value){
    document.getElementById('cpd').innerHTML = "Match"
    document.getElementById('cpd').style.color = 'green'
    document.getElementById('cpd').style.fontSize = '15px'
    return true;
   }

   else{
    document.getElementById('cpd').innerHTML = "Not Match"
    document.getElementById('cpd').style.color = 'red'
    document.getElementById('cpd').style.fontSize = '15px'
    return false;
   }
}

function phoneCheck(){
    let returnValue = true;
    var pnr = document.getElementById("Pnr").value;
    if(pnr==""){
        document.getElementById("PN").innerHTML = "** please fill phone number";
        document.getElementById("PN").style.color = "red"
        returnValue = false;
    }
    if(isNaN(pnr)){
        document.getElementById("PN").innerHTML = " Only Numbers";
        document.getElementById("PN").style.color = "red"
        returnValue = false;
    }

    if(pnr.length<10){
        document.getElementById("PN").innerHTML = "** please enter 10 digits number";
        document.getElementById("PN").style.color = "red"
        returnValue = false;
    }
    if(pnr.length>=10){
        document.getElementById("PN").innerHTML = " Correct";
        document.getElementById("PN").style.color = "green"
        returnValue = false;
    }

    return returnValue;
}

function clearfname(){
    let fname = document.getElementById("fname").value;
    if(fname!=""){
        document.getElementById("fn").innerHTML =""
    }
}
function clearlname(){
    let lname = document.getElementById("lname").value;
    if(lname!=""){
        document.getElementById("ln").innerHTML =""
    }
}