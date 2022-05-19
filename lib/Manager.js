const {Employee} = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
 }
 getRole(){
    return 'Manager';
}

} 



const manager = new Manager("torre", "50", "t@gmail.com", 5858)




console.log(manager.getRole());