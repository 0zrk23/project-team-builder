const inquirer = require("inquirer");
const getInfo = require("./getInfo");
const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require('../lib/Intern');

/**
 * This function generates an employee based on prompts given through enquire
 * @param {string} employeeType The type of employee
 * @returns {object} The employee object
 */
const employeeGenerator = (employeeType) => {
    //calls the getInfo promise
    return getInfo(employeeType)
        .then(res => {
            // console.log(res);
            const {name, id , email, employee_info} = res;
            //evaluates a string for the employee type to skip having multiple if's and else's
            let employee = eval(`new ${employeeType}(name,id,email,employee_info)`);
            // console.log(employee);
            return employee;
        });
};

// employeeGenerator('Engineer')

module.exports = employeeGenerator;