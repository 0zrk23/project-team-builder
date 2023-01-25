const Engineer = require("../lib/Engineer");

//testing suite for the Engineer class
describe("Engineer Class", () => {
    //test if the constuctor works for the new addition
    test("Constructor", () => {
        const john = new Engineer("john",3,"john@mail.com","github.profile/john");
        expect(john.roll).toBeDefined();
        expect(john.github).toBeDefined();
        expect(john.roll).toEqual("Engineer");
        expect(john.github).toEqual("github.profile/john");
    });
    //test constructor exemptions and errors
    test("Constructor Exemptions and Erros", () => {
        const john = () => new Engineer("john",3,"john@mail.com");
        expect(john).toThrow(Error("Expected 'github' to be a non-empty string"));
    });
    //test subclass methods
    test("Class Methods", () => {
        const john = new Engineer("john",3,"john@mail.com","pedestrian20");
        expect(john.getGitHub()).toEqual("pedestrian20");
    });
});