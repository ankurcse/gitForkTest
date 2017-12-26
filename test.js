function User(data){
	
	this.name = data.name;
	this.age = data.age;
	
	this.getUserDetail = function(){
		
		return "Name:-"+this.name +"   "+"Age:"+this.age;
	}
	
}
User ankur = new User({name:"Ankur",age:27});
console.log(ankur.getUserDetail());

User.prototype.getUserData = function(){
	
	return  "Name:-"+this.name +"   "+"Age:"+this.age ;
}
//doing for inheritence
function commonUser(){
	User.call();
	
}

var ClassA = function() {
    this.name = "class A";
}
//This “class” can be instantiated using the new keyword:
var a = new ClassA();
ClassA.prototype.print = function() {
    console.log(this.name);
}
//And to use it using our object:
a.print();

//Now let’s add a tool to create “inheritance” between classes. This tool will just have to do one single thing: clone the prototype.
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};


var ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
}
 
inheritsFrom(ClassB, ClassA);
//Then because ClassB inherited the print function from ClassA, the following code is working:

var b = new ClassB();
b.print();

//updating
ClassB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    console.log(this.surname);
}

//The trick here is to call ClassA.prototype to get the base print function. Then thanks to the call function we can call the base function on the current object (this).
//Creating ClassC is now obvious:
var ClassC = function () {
    this.name = "class C";
    this.surname = "I'm the grandchild";
}
 
inheritsFrom(ClassC, ClassB);
 
ClassC.prototype.foo = function() {
    // Do some funky stuff here...
}
 
ClassC.prototype.print = function () {
    ClassB.prototype.print.call(this);
    console.log("Sounds like this is working!");
}
 
var c = new ClassC();
c.print();