const inquirer = require('inquirer')

function ask(emp,empInfo,type){
    return {
        name: empInfo,
        type: 'input',
        message: `Please enter the ${emp}'s ${empInfo}`,
        validate(answer){
            return new Promise((resolve,reject)=>{
                if(!answer){
                    reject(new Error(`Expected '${empInfo}' to be a non-empty ${type}`));
                }
                if(type === 'number' && (answer <= 0 || !parseInt(answer))){
                    reject(new Error(`Expected '${empInfo}' to be a number greater than 0`));
                }
                resolve(true);
            });
        }
    }
}

const getInfo = function (empType){
    // return new Promise(functio(res,rej))
    let empInfo;
    type = 'input';
    if(empType === 'Manager'){
        empInfo = 'Office_Number';
        type = 'number';
    }
    if(empType === 'Engineer'){
        empInfo = 'GitHub_username';
    }
    if(empType === 'Intern'){
        empInfo = 'school';
    }
    return inquirer.prompt([
        ask(empType,'name'),
        ask(empType,'id','number'),
        ask(empType,'email'),
        {
            name: 'employee_info',
            type: 'input',
            message: `Please enter the ${empType}'s ${empInfo}`
        }
    ])
}

module.exports = getInfo;