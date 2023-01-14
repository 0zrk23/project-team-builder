class Employee {
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

}

module.exports = Employee;