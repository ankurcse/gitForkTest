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