const fs = require('fs');
const generateTeam = require('./src/teamGenerator');
const generateHTML = require('./src/generateHTML');
const team = require('./db/testGroup.json')

init();

/**
 * This function generates an html file based on propts the user is given
 */
async function init(){
    //generates team
    // team = await generateTeam();
    //generates html
    markup = generateHTML(team);
    //writes the new html file
    fs.writeFile('generated-index.html', markup, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}
