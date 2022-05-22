const Manager = require('./lib/Manager');

describe("Manager Test", () => {
    describe("Object Creation", () => {
        describe("Shoul return  Manager", () =>{
            const manager = new Manager("Eric", "89", "raphsoneric@gmail.com", "7378438010")
            expect(employee.getName()).toEqual("Eric");
            expect(employee.getId()).toEqual("89");
            expect(employee.get()).toEqual("raphsoneric@gmail.com");
            expect(employee.getofficeNumber()).toEqual("7378438010");
            expect(employee.getRole()).toEqual("Manager");
         })
    })
})