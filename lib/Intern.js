const Employee = require("./Employee");

//Intern Class
class Intern extends Employee {
    /** Constructor for the Intern Class
    @param {string} The employee name
    @param {number} The employee id
    @param {string} The employee email
    @param {string} The intern's school */
    constructor(name,id,email,school){
        if(!school){
            throw new Error("Expected 'school' to be a non-empty string");
        }
        super(name,id,email);
        this.roll = "Intern";
        this.school = school;
    }
    //This method returns the Intern's school
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;