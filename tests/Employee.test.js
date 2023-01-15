const Employee = require("../lib/Employee");

//testing suit for the employee class
describe("Employee",() => {
    //test the constructor
    test("Constructor",()=>{
        const john = new Employee("john",3,"john@mail.com");
        //see if all properties exist and are defined
        expect(john.name).toBeDefined();
        expect(john.id).toBeDefined();
        expect(john.email).toBeDefined();
        expect(john.roll).toBeDefined();
        //see if all properties are equal to the inputs
        expect(john.name).toEqual("john");
        expect(john.id).toEqual(3);
        expect(john.email).toEqual("john@mail.com");    
        expect(john.roll).toEqual("Employee");
    });
    //test constructor exemptions
    test("Constructor Exemptions and Errors", () => {
        const nameless = () => new Employee();
        const idless = () => new Employee("john");
        const numId = () => new Employee("john","h");
        const negId = () => new Employee("john",-3,"john@mail.com");
        const zeroId = () => new Employee("john",0,"john@mail.com");
        const emailless = () => new Employee("john",3);
        //check to see if all constroctor erros are thrown correctly
        expect(nameless).toThrow(new Error("Expected 'name' to be a non-empty string"));
        expect(idless).toThrow(new Error("Expected 'id' be a non-empty, negative or zero number"));
        expect(numId).toThrow(new Error("Expected 'id' be a non-empty, negative or zero number"));
        expect(negId).toThrow(new Error("Expected 'id' be a non-empty, negative or zero number"));
        expect(zeroId).toThrow(new Error("Expected 'id' be a non-empty, negative or zero number"));
        expect(emailless).toThrow(new Error("Expected 'email' be a non-empty string"));
    });
    //test class methods
    test("Class Methods",() => {
        const john = new Employee("john",3,"john@mail.com");
        expect(john.getName()).toEqual("john");
        expect(john.getId()).toEqual(3);
        expect(john.getEmail()).toEqual("john@mail.com");
        expect(john.getRoll()).toEqual("Employee");
    });
});


