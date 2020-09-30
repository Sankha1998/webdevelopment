//1. Listen for button click

document.querySelector('#stats').addEventListener('click',function(){
	
// fetch the user input
let userinput = document.querySelector('#user_input').value;

// 3. calculate no of characters 
let n=userinput.length;

// 4. display in html
document.querySelector('#Characters').textContent=n;
// 5. calculate words
let v =  userinput.trim(" ");
 let w = v.split(" ");

//6. display in html
document.querySelector('#words').textContent=w.length;

//7. Empty the textarea

document.querySelector('#user_input').value='';


})

