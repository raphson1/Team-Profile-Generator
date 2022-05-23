function htmlGenerator (employees){

var cards = ''
for (employee of employees){
    var role
    var icon
    console.log(employee.getRole())
    if(employee.getRole() === "Manager"){
        icon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg> `
        role = `Office number: ${employee.getofficeNumber()}` 
    } else if(employee.getRole() === "Engineer"){
        icon =` <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                  <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                 </svg>`
        role = `GitHub: <a href="https://github.com/${employee.getGithub()}"> ${employee.getGithub()} </a>`
    } else if(employee.getRole()=== "Intern"){
        icon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                </svg>`
        role = `School: ${employee.getSchool()}`
    }


var card =
    `<div class="card cards" style="width: 18rem;">
    <div class="card-header bg-dark text-white">
        <h2>${employee.getName()}</h2>
        <h3>${icon} ${employee.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()}</a></li>
        <li class="list-group-item"> ${role} </li>
    </ul>
    </div>
    `
    
cards += card
}

     return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style href="stylesheet" src="/dist/style.css"></style>
    <title>Team Profile</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-dark text-center text-white">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
        <div class="container">
        <div class =" box-card row d-flex justify-content-center">`
           + cards + `
        </div>   
    </div> 
</body>
</html>
                `
              
      
}
module.exports = htmlGenerator