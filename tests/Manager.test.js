const Manager = require('../lib/Manager');

describe("Manager Test", () => {
    describe("Object Creation", () => {
        describe("Should return Manager", () =>{
            const manager = new Manager("Eric", "89", "raphsoneric@gmail.com", "7378438010")
            expect(manager.getName()).toEqual("Eric");
            expect(manager.getId()).toEqual("89");
            expect(manager.getEmail()).toEqual("raphsoneric@gmail.com");
            expect(manager.getofficeNumber()).toEqual("7378438010");
            expect(manager.getRole()).toEqual("Manager");
         })
    })
})