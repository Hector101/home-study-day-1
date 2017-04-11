/*
    Initializing the vehicle object, which is
    the parent object to other types of vehicle
*/
function Vehicle(name, model, wheels, status) {
	this.name = name;
	this.model = model;
	this.status = "Vehicle not moving";
    this.wheels = wheels;
	if(name == undefined) {
		this.name = 'Vehicle';
	}
	if(model == undefined) {
		this.model = 'Model Unknown';
	}
}

//Method to set the name of the Vehicle object
Vehicle.prototype.name = function(name) {
	this.name = name;
}

//Method to set the model of the Vehicle object
Vehicle.prototype.setModel = function(model) {
	this.model = model;
}

//Method to start of the Vehicle
Vehicle.prototype.start = function() {
	this.isMoving = false;
	this.isStatic = true;
	this.status = 'Started';
    /*
    	encapsulation that makes the speed local to the start method
    	that can't be manipulated from ouside.
    */ 
	let speed = 0;
    return speed;
}
//Method to accelerate the Vehicle
Vehicle.prototype.move = function() {
	this.isMoving = true;
	this.isStatic = false;
	this.status = 'Accelerated';
    /*
    	encapsulation that makes the speed local to the move method
    	that can't be manipulated from ouside.
    */ 
	let speed = 60;
    return speed;
 }
//Method to off the Vehicle
Vehicle.prototype.off = function() {
	if(this.isMoving === undefined || this.isStatic === undefined) {
		throw new Error('not started');
	}else{
		this.isMoving = false;
		this.isStatic = true;
		this.status = 'off';
	}
}


function Cars(){
    //overriding the wheels instance variable from the parent object
    this.wheels = 4;
}
function Bicycle(){
    this.wheels = 2;
}
// inheriting from the parent object Vehicle to Car object
Cars.prototype = new Vehicle();
//instializing the Car instance called toyota
let toyota = new Cars("Toyota", "VS-3342");

//console.log(toyota.isMoving);

// inheriting from the parent object Vehicle to Bicycle object
Bicycle.prototype = new Vehicle();
//instializing the Car instance called toyota
let maruwa = new Cars("Maruwa", "TY-33LP2");

module.exports.toyota = toyota;
module.exports.maruwa = maruwa;