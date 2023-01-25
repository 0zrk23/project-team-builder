const inquirer = require('inquirer');
const empGen = require("./employeeGenerator");

/**
 * This function executes all of the employee helper functions to generate a team
 * @returns {array} The array of employee objects the user was prompted for
 */
async function generateTeam(){
    let team = [];
    //generate a manager
    team.push(await empGen('Manager'));
    //genereate engineers
    const engineers = await more('Engineer');
    team.push(...engineers);
    //generate interns
    const interns = await more('Intern');
    team.push(...interns);
    return team;
}

/**
 * This function is used to repeatedly prompt the user for more of  the desired employee
 * @param {string} employeeType The type of employee you want
 * @returns {string} The generated markup
 */
async function more(employeeType){
    let employees = [];
    let done = false;
    //while it is not done, it will keep prompting the user
    while(!done){
        employees.push(await empGen(employeeType));
        //calls function to prompt user for more of the type of employee
        done = await askForMore();
    }
    return employees;
}

/**
 * This function prompts the user if they desire more of the specified emplyee
 * @param {string} employeeType The type of employee to prompt the user
 * @returns {boolean} If the user wants more of the specified employee
 */
function askForMore(employeeType){
    //ask the user if they desire more of an employee
    return inquirer.prompt([
        {
            name: 'more',
            type: 'input',
            message: `Do you want to enter another ${employeeType}? (y/n)`,
            //validation promise
            validate(ans){
                return new Promise(function(res,rej){
                    if(!ans || (ans !== 'y' && ans !== 'n')){
                        rej("Expected input to be 'y' or 'n'");
                    } else if(ans === 'y'){
                        res(true);
                    } else {
                        done = true;
                        res(true)
                    }
                })
            }
        }
    ]).then(ans =>{
        //return boolean based on response
        if(ans.more === 'y'){
            return false;
        } else {
            return true;
        }
    });
}


module.exports = generateTeam;