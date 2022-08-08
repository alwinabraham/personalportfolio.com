function validatename(){

  var name=document.getElementById('name').value 
  var nameformat = /^[A-Za-z ]+$/;

  if (name==null || name==" "){
    document.getElementById("namedemo").innerHTML = "Name can't be blank";
    return false;
  }
    if(!name.match(nameformat))
    {
    document.getElementById("namedemo").innerHTML = "You have entered an invalid Name!";
    return false;
    }
    document.getElementById("namedemo").innerHTML = "";
  }  

  
function validateemail(){

var email=document.getElementById('email').value
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(email==null || email==" "){
  document.getElementById("emaildemo").innerHTML ="Email can't be blank";
  return false;
}else if(!email.match(mailformat)){
    document.getElementById("emaildemo").innerHTML ="You have entered an invalid email address!";
    return false;
}else{
  document.getElementById("emaildemo").innerHTML ="";
}
}
  
function validatesubject(){
  var subject= document.getElementById('subject').value 
  if(subject == null || subject==" "){
    document.getElementById("subjectdemo").innerHTML ="Subject can't be blank";
    return false;
  }else{
    document.getElementById("subjectdemo").innerHTML = "";
  }
}

function validatemessage(){
  var message = document.getElementById('message').value 
  if(message == null || message==" "){
    document.getElementById("textdemo").innerHTML ="message can't be blank";
    return false;
  }else{
    document.getElementById("textdemo").innerHTML = "";
  }
}
  
  