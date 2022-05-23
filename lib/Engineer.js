// import the parent class
const Employee = require("./Employee");

// extend the parent class 
class Engineer extends Employee {
    constructor(name, id, email, github ){
        super(name, id, email)
        this.github = github;   
    }
    getGithub(){
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

//exports Engineer class
module.exports = Engineer
    