// parent class

class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName() {
        return this.name;
    }
   getId(){
        return this.id;
     }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// export class Employee
module.exports ={
    Employee
}
const employee = new Employee('eric', '40', 't@gmail.com', 46962)

console.log(employee.getRole())
console.log(employee.getName())