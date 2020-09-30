/* common loops
1.for loop
2.while
3.do while
4.break & continue
*/

var number = prompt("enter number");

/*for(var i=1;i<=10;i++){
	console.log(`${number} * ${i} = ${number * i}`)
}


var i = 1;

while(i<11){
	console.log(`${number} * ${i}=${number*i}`)
	i++;
}
*/
/*

for(var i = 0; i<=10;i++){

	if(i==5){
		break;
	}
	console.log(i);
}
*/



for(var i = 0; i<=10;i++){

	if(i==5){
		continue;
	}
	console.log(i);
}