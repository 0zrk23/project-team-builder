const inquirer = require('inquirer');
const empGen = require("./employeeGenerator");

async function generateTeam(){
    let team = [];
    team.push(await empGen('Manager'));
    const engineers = await more('Engineer');
    team.push(...engineers);
    const interns = await more('Intern');
    team.push(...interns);
    return team;
}

async function more(empType){
    let employees = [];
    let done = false;
    while(!done){
        employees.push(await empGen(empType));
        await inquirer.prompt([
            {
                name: 'more',
                type: 'input',
                message: `Do you want to enter another ${empType}? (y/n)`,
                validate(ans){
                    return new Promise(function(res,rej){
                        if(!ans || (ans !== 'y' && ans !== 'n')){
                            rej("Expected input to be 'y' or 'n'");
                        }
                        if(ans === 'y'){
                            res(true);
                        } else {
                            done = true;
                            res(true)
                        }
                    })
                }
            }
        ])
    }
    return employees;
}

module.exports = generateTeam;