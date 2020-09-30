var email = prompt("Enter Your mail");
var password = prompt("Enter password");

if(email=="abc@gmail.com" && password == "1234"){
	alert("logedin");
}

else if(email=="abc@gmail.com" && password != "1234"){
	alert("re-enter password");
	var password = prompt("Enter password");
	if(password==="1234"){
		alert("logedin");

	}else{
		alert("galat");
	}
}
else{
	alert("galat");
}