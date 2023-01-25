const inquirer = require('inquirer')

/**
 * This function generates a prompt for inquirer
 * @param {string} employeeType The type of employee you are asking about
 * @param {string} employeeInfo The information about the employee you want to know
 * @param {string} promptType The type of prompt being used
 * @returns {object} The prompt object ready to be used by inquirer
 */
function ask(employeeType,employeeInfo, promptType){
    let divider = '';
    //checks if a new employee is being asked for, if so, create a divider
    if(employeeInfo === 'name'){
        divider = '------------------\n';
    }
    //returns an object designed to be used as a prompt for inquirer
    return {
        name: employeeInfo,
        type: 'input',
        message: `${divider}Please enter the ${employeeType}'s ${employeeInfo}`,
        validate(answer){
            return new Promise((resolve,reject)=>{
                if(!answer){
                    reject(new Error(`Expected '${employeeInfo}' to be a non-empty ${promptType}`));
                }
                if(promptType === 'number' && (answer <= 0 || !parseInt(answer))){
                    reject(new Error(`Expected '${employeeInfo}' to be a number greater than 0`));
                }
                resolve(true);
            });
        }
    }
}

/**
 * This function prompts the user for the employee information
 * @param {string} employeeType The type of employee
 * @returns {object} The information gatherd by inquirer
 */
const getInfo = function (employeeType){
    // return new Promise(functio(res,rej))
    let employeeInfo;
    if(employeeType === 'Manager'){
        employeeInfo = 'Office_Number';
    }
    if(employeeType === 'Engineer'){
        employeeInfo = 'GitHub_username';
    }
    if(employeeType === 'Intern'){
        employeeInfo = 'school';
    }
    return inquirer.prompt([
        ask(employeeType,'name'),
        ask(employeeType,'id','number'),
        ask(employeeType,'email'),
        {
            name: 'employee_info',
            type: 'input',
            message: `Please enter the ${employeeType}'s ${employeeInfo}`
        }
    ])
}

module.exports = getInfo;