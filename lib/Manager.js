const Employee = require("./Employee");

//Manager subclass
class Manager extends Employee {
    /** Constructor for the Manager subclass
     * @param {string} name The name of the Employee
     * @param {number} id The id of the Employee
     * @param {string} email The email of the Employee
     * @param {number} officeNumber The office number of the manager */
    constructor(name,id,email,officeNumber){
        if(!officeNumber || officeNumber <= 0 || isNaN(officeNumber)){
            throw new Error("Expected 'officeNumber' to be a non-empty string");
        }
        super(name,id,email);
        this.roll = "Manager";
        this.officeNumber = officeNumber;
    }
    //This method returns the office number
    getOfficeNum(){
        return this.officeNumber;
    }
}

module.exports = Manager;