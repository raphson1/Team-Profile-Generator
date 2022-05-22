function htmlGenerator (employees){

var cards = ''
for (employee of employees){
    var role
    console.log(employee.getRole())
    if(employee.getRole() === "Manager"){

        role = `Office number: ${employee.getofficeNumber()}` 
    } else if(employee.getRole() === "Engineer"){
        role = `GitHub: <a href="https://github.com/${employee.getGithub()}"> ${employee.getGithub()} </a>`
    } else if(employee.getRole()=== "Intern"){
        role = `School: ${employee.getSchool()}`
    }


    var card =
`<div class="card" style="width: 18rem;">
<div class="card-header bg-danger">
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">Id: ${employee.getId()}</li>
    <li class="list-group-item">Email:${employee.getEmail()}</li>
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
        <div class="jumbotron jumbotron-fluid bg-danger text-center text-white">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
         <div class="container">
            <div class =" box-card row d-flex justify-content-center">`
                  + cards + `
                  </div>
            
            
                 </div> 
                
                
              
            </div>
            </body>
            </html>
                  `
              
      
}
module.exports = htmlGenerator