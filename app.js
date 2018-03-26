//alert("hello there");

//document.getElementById("test").innerHTML = "hello there";
//var pm = document.getElementById("test").style.left = "0px";
//var node1 = document.getElementById("test");
//var move = 0;
//console.log(pm);
//console.log(node1);

var car1 = document.createElement("button");
var textNode = document.createTextNode("Car 1");

car1.appendChild(textNode);
document.getElementById("A").appendChild(car1);
car1.setAttribute("id", "obj1");
document.getElementById("A").style.position = "absolute";
document.getElementById("obj1").style.position = "relative";

var car2 = document.createElement("button");
var textNode2 = document.createTextNode("Car 2");
car2.appendChild(textNode2);

document.getElementById("B").appendChild(car2);
car2.setAttribute("id", "obj2");
document.getElementById("obj2").style.position = "absolute";
//alert("hi");


//node1.addEventListener('click', () => {
	//console.log("hi");
	//move++;
	//let temp = move.toString() + "px";

	//node1.style.left = temp;
//
let move = 0;
let car1Run = () =>{
	//let move = 0;
	//var x = event.which;
	//console.log(x);
	move += 100;
	let temp = move.toString() + "px";
	car1.style.left = temp;
	//alert("hi");
	//console.log(car1.style.left);
	//alert("hi");

}

let car2Run = () =>{
	//let move = 0;
	//var x = event.which;
	//console.log(x);
	move += 101;
	let temp = move.toString() + "px";
	car1.style.left = temp;
	//alert("hi");
	//console.log(car1.style.left);
	//alert("hi");

}


document.addEventListener("keydown", car1Run );
document.addEventListener("keydown", car2Run );

	
//move1 = () => {
	//alert("hi");
//}









//var i =0;
  //document.getElementById('#test').css({marginTop: '+=150px'});
  //for( i ; i < 1000;i++){
  	//i++;
  //}
  //var temp = i.toString() + "px";
 // document.getElementById("test").style.left = temp;
//console.log(typeof(pm));
 //console.log("another test");
 
 //console.log(pm);
 //alert("hello");

//var node = document.getElementById("test");
//var location = node.style.left ;
//var location = document.getElementById("test").style.left = "10px";
//node.addEventListener('click', race);
//node.addEventListener("click", function(){modifyText("four")}, false);


//function race(){

//}