const app = require("../src/app");

describe("Create a Vehicle object", function() {

    it("with a method to set Car model to `VH-YGV7`", function() {
    	app.toyota.setModel("VH-YGV7");
      expect(app.toyota.model).toEqual("VH-YGV7");
    });

    it("with a method to set Maruwa model to `HY4-RTT`", function() {
    	app.maruwa.setModel("HY4-RTT");
      expect(app.maruwa.model).toEqual("HY4-RTT");
    });

    it("to check the acceleration status of maruwa when not stated", function() {
    	if(!app.maruwa.start()){
    		expect(app.maruwa.isMoving).toBeFalsy();
	    	expect(app.maruwa.isStatic).toBeTruthy();
    	}
    });
    it("to check the acceleration status of the toyota when not stated", function() {
    	if(!app.toyota.start()){
    		expect(app.toyota.isMoving).toBeFalsy();
	    	expect(app.toyota.isStatic).toBeTruthy();
    	}
    });

    it("with a method to start the toyota car, check acceration status", function() {
    	app.toyota.start();
	    expect(app.toyota.isMoving).toBe(false);
	    expect(app.toyota.isStatic).toBe(true);
	    expect(app.toyota.status).toBe("Started");
	    expect(app.toyota.start()).toBe(0);

    });
    it("with a method to start the maruwa, check acceration status", function() {
    	app.maruwa.start();
	    expect(app.maruwa.isMoving).toBe(false);
	    expect(app.maruwa.isStatic).toBe(true);
	    expect(app.maruwa.status).toBe("Started");
	    expect(app.maruwa.start()).toBe(0);
    });

    it("with a method to move the toyota car, check acceration status", function() {
    	app.toyota.move();
	    expect(app.toyota.isMoving).toBe(true);
	    expect(app.toyota.isStatic).toBe(false);
	    expect(app.toyota.status).toBe("Accelerated");
	    expect(app.toyota.move()).toBe(60);
    });
    it("with a method to move the maruwa, check acceration status", function() {
    	app.maruwa.move();
	    expect(app.maruwa.isMoving).toBe(true);
	    expect(app.maruwa.isStatic).toBe(false);
	    expect(app.maruwa.status).toBe("Accelerated");
	    expect(app.maruwa.move()).toBe(60);
    });

    it("with a method to off the maruwa, throw error when not started", function() {
    	if(app.maruwa.isMoving === undefined || app.maruwa.isStatic === undefined){
    		expect(function(){
    			app.maruwa.off();
    		}).toThrowError("not started");
    	}
    });
    it("with a method to off the toyota, throw error when not started", function() {
    	if(app.toyota.isMoving === undefined || app.toyota.isStatic === undefined){
    		expect(function(){
    			app.toyota.off();
    		}).toThrowError("not started");
    	}
    });

    it("with a method to off the toyota, status to be `off`", function() {
    	if(app.toyota.isMoving || app.toyota.isStatic){
    		app.toyota.off();
    		expect(app.toyota.status).toBe("off");
    	}
    });
    it("with a method to off the maruwa, status to be `off`", function() {
    	if(app.maruwa.isMoving || app.maruwa.isStatic){
    		app.maruwa.off();
    		expect(app.maruwa.status).toBe("off");
    	}
    });

});