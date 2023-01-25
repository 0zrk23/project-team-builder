
/**
 * This function generates the markup for the employee card
 * @param {object} employee The employee object
 * @returns {string} The markup for the emplyee card
 */
function generateEmplyeeCard(employee){
    let icon;
    let employee_info;
    //check which kind of employee you are generating the card for and change info and icon to match
    if (employee.roll === 'Manager'){
        icon = '<i class="bi bi-cup-hot-fill"></i>';
        employee_info = `Office number: ${employee.officeNumber}`;
    } else if (employee.roll === 'Engineer'){
        icon = '<i class="bi bi-eyeglasses"></i>';
        // console.log(employee.github);
        employee_info = `GitHub Username: <a href="#">${employee.github}</a>`;
    } else {
        icon = '<i class="bi bi-pencil-fill"></i>';
        employee_info = `School: ${employee.school}`;
    }
    //setup the markup for the card
    let markup = `      <div class="card" style="width: 18rem;">
            <h2 class="card-header bg-info-subtle h2">${employee.name}</h2>
            <h3 class="card-title text-center h3">${icon}${employee.roll}</h3>
            <div class="card-body">
                <div class="card" style="width: 14rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="#">${employee.email}</a></li>
                        <li class="list-group-item">${employee_info}</li>
                    </ul>
                </div>
            </div>
        </div>
`;
    return markup;
}

module.exports = generateEmplyeeCard;