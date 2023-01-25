const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");

//this class generates a dream team for testing
const dreamTeam = [
    new Manager("Albus Dumbeldor",1,"dumbeldor@hogwartsgym.com",1),
    new Engineer("Harry Squatter",2,"squatter@hogwartsgym.com","TheBoyWhoLifted"),
    new Engineer("Testosteron Weasley",3,"testosteron@hogwartsgym.com","R0IDB0I"),
    new Engineer("Hermione Gainger",4,"gains@hogwartsgym.com","gainzGainzGAINZ"),
    new Engineer("Wako Deltoids",5,"deltoids@hogwartsgym.com","musclehead86"),
    new Intern("Swoldemort",6,"tomriddle@hogwarts","School for Losers"),
    new Intern("Throbby",7,"throbby@hogwartsgym.com","School of the Free (Flexers)")
];

fs.writeFile("./db/testGroup.json",JSON.stringify(dreamTeam), err =>
    err ? 
    console.log(err)
    : console.log("Successfully Created Dream Team")
);