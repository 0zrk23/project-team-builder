const Intern = require("../lib/Intern");

//testin suite for Intern Class
describe("Intern Class",() => {
    //test class constructors 
    test("Class Constructor",()=>{
        const john = new Intern("john",3,"john@mail.com","University of Utah");
        //test if the object has the expected properties
        expect(john.roll).toBeDefined();
        expect(john.school).toBeDefined();
        //test if the properties have the expected values
        expect(john.roll).toEqual("Intern");
        expect(john.school).toEqual("University of Utah");
    });
    //test if new errors are correct
    test("Constructor Exemptions and Errors",()=>{
        const john = () => new Intern("john",3,"john@mail.com");
        //test if the thrown errors are the expected errors
        expect(john).toThrow(new Error("Expected 'school' to be a non-empty string"));
    });
    //test the class methods
    test("Class Methods",()=>{
        const john = new Intern("john",3,"john@mail.com","University of Utah");
        //test if the new methods return expected values
        expect(john.getSchool()).toEqual("University of Utah");
    })
});