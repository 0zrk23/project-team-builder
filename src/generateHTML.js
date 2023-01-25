const generateCard = require('./generateEmployeeCard');
const dreamTeam = require('../db/testGroup.json');

/**
 * This function is used to generate the markup for the HTML document
 * @param {array:objects} team The array containing the team members by decending importance 
 * @returns Markup string that can be converted into an html document
 */
function generateMarkup(team){
    //set up the first portion of the markup
    markup = `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar bg-body-tertiary bg-info-subtle mb-3">
            <div class="container-fluid">
                <span class="navbar-brand h1">My Team</span>
            </div>
        </nav>
        <div class="d-flex justify-content-center flex-wrap gap-3">`;
    //This forloop loops through the team and generates a card for each of the team members
    for(let i=0; i<team.length; i++){
        markup += generateCard(team[i]);
    }
    markup +=`      </div> 
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
</html>`;
    return markup;
}

module.exports =  generateMarkup;

// console.log(generateMarkup(dreamTeam));