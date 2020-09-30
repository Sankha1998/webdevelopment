// function declearation
// func expression

// object method

/*

function say(){

	console.log("Hello");


}



function power(fnum=1,snum=1){
	return Math.pow(fnum,snum);
}

var x = power(8);
console.log(x);


*/



// fun expression 

/*
var square = function(num){
	return num*num;
}


console.log(square(4));


*/



// object method


const student={
	takeExam: function(){
		console.log("taking exam");
	},
	placement : function(){
		console.log("Sitting in exam");

}

};


student.takeExam();

// create new key
student.watchMov=function(i){
	console.log(`watching ${i}`);
}


student.watchMov("race4");