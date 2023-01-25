const inquirer = require("inquirer");
const getInfo = require("./getInfo");
const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require('../lib/Intern');

//this class asks for employee information
const employeeGenerator = (empType) => {
    return getInfo(empType)
        .then(res => {
            const {name, id , email, employee_info} = res;
            return eval(`new ${empType}(name,id,email,employee_info)`)
        });
};

// employeeGenerator('Manager')

module.exports = employeeGenerator;