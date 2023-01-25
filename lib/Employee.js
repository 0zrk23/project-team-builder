/* This is the employee object*/
class Employee {
    /** Constructor method
    *   @param {string} The name of your employee
    *   @param {number} The Employee Id
    *   @param {string} The Employee email 
    */
    constructor(name,id,email){
        if(!name){
            throw new Error("Expected 'name' to be a non-empty string");
        } else if (!id || id <= 0 || isNaN(id)){
            throw new Error("Expected 'id' be a non-empty, negative or zero number");
        } else if (!email){
            throw new Error("Expected 'email' be a non-empty string");
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.roll = "Employee"
    }
    //This method returns the Employee name
    getName(){
        return this.name;
    }
    //This method returns the Employee id
    getId(){
        return this.id;
    }
    //This method returns the Employee email
    getEmail(){
        return this.email;
    }
    //This method returns the Employee roll
    getRoll(){
        return this.roll;
    }
}

module.exports = Employee;