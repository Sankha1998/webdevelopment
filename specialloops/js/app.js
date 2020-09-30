const f = ["apple","banana","Guava","Pineapple","peach"];


// for each

/*
f.forEach(function(i,index){

 console.log(`${index}.${i}`);
})


*/

/* //mapping
const employees= [
{id:1,name:"Amit"},
{id:2,name:"amita"},
{id:3,mame:"Amrita"}
];



const names=employees.map(function(i){
	return i.name;
})

console.log(names);


*/


// for in loop


const student = {
	name:"Nitish",
	college:"BIT",
	branch:"EEE",
	passingyear:2013
};


for(var key in student){
	console.log(`${key} value is  ${student[key]}`)
;}