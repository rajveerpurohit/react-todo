// function add(a,b){
// 	return a + b;
// }


// var a = [6,3];
// console.log(add(...a));


var groupA = ['raj','sam'];
var groupB = ['abc','pqr'];

var final = [...groupA,3,...groupB];

final.forEach((item)=>{
	console.log(item);
});

// console.log(final)

// var p1 = ['Rajveer','27'];
// var p2 = ['Andrew','29'];

// function greet(name,age){
// 	console.log(`Hi ${name} your age is ${age}`);
// }

// greet(...p1);
// greet(...p2);

