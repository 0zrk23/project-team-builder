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
    let promptInfo = employeeInfo
    //checks if a new employee is being asked for, if so, create a divider
    if(employeeInfo === 'name'){
        divider = '------------------\n';
    }
    if(employeeInfo === 'id'){
        promptType = 'number';
    }
    if(employeeInfo === 'employee_info'){
        if(employeeType === 'Manager'){
            promptInfo = 'Office number';
            promptType = 'number';
        }
        if(employeeType === 'Engineer'){
            promptInfo = 'GitHub Username';
        }
        if(employeeType === 'Intern'){
            promptInfo = 'School';
        }
    }
    
    //returns an object designed to be used as a prompt for inquirer
    return {
        name: employeeInfo,
        type: 'input',
        message: `${divider}Please enter the ${employeeType}'s ${promptInfo}`,
        validate(answer){
            return new Promise((resolve,reject)=>{
                if(!answer){
                    reject(new Error(`Expected '${employeeInfo}' to be a non-empty string`));
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
    let employeeInfo;

    //returns a promise from inquirer
    return inquirer.prompt([
        //ask for the employee name
        ask(employeeType,'name'),
        //ask for the employee id
        ask(employeeType,'id'),
        //ask for the employee email
        ask(employeeType,'email'),
        //ask for the em
        ask(employeeType, 'employee_info')
    ])
}

module.exports = getInfo;