const Employee = require("./Employee");

//Engineer subclass
class Engineer extends Employee {
    /* Constructor for the Engineer subclass
    @param {string} The employee name
    @param {number} The employee id
    @param {string} The employee email
    @param {string} The Engineer's github link
    */
    constructor(name,id,email,github){
        if (!github) {
            throw new Error("Expected 'github' to be a non-empty string");
        }
        super(name,id,email);
        this.roll = "Engineer";
        this.github = github;
    }
    //This function returns the engineers github link
    getGitHub(){
        return this.github;
    }
}

module.exports = Engineer;