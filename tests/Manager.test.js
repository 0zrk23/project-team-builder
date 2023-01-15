const Manager = require("../lib/Manager");

//testing suite for the Manager subclass
describe("Manager Subclass",()=>{
    //test the subclass constructor
    test("Subclass Constructor",()=>{
        const john = new Manager("john",3,"john@mail.com",23);
        //expect object to contain expected properties
        expect(john.roll).toBeDefined();
        expect(john.officeNumber).toBeDefined();
        //test if the properties are the expected values
        expect(john.roll).toEqual("Manager");
        expect(john.officeNumber).toEqual(23);
    });
    //test constructor exemptions and erros
    test("Constructor Exemptions and erros",()=>{
        const officeless = ()=> new Manager("john",3,"john@mail.com");
        const notNum = () => new Manager("john",3,"john@mail.com","h");
        const zeroOffice = () => new Manager("john",3,"john@mail.com",0);
        const negOffice = () => new Manager("john",3,"john@mail.com",-23);
        //test all of the exemptions and erros
        expect(officeless).toThrow(new Error("Expected 'officeNumber' to be a non-empty string"));
        expect(notNum).toThrow(new Error("Expected 'officeNumber' to be a non-empty string"));
        expect(zeroOffice).toThrow(new Error("Expected 'officeNumber' to be a non-empty string"));
        expect(negOffice).toThrow(new Error("Expected 'officeNumber' to be a non-empty string"));
    });
    //test subclass methods
    test("Subclass Methods",()=>{
        const john = new Manager("john",3,"john@mail.com",23);
        expect(john.getOfficeNum()).toEqual(23);
    });
});