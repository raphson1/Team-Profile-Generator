const Engineer = require('./lib/Engineer')

describe ("Engineer Test", () => {
    describe("Object Creation", () => {
        it("Should give an Engineer", () => {
            const engineer = new Engineer("Eric", "89", "raphsoneric@gmail.com", "raphson1")
            expect(employee.getName()).toEqual("Eric");
            expect(employee.getId()).toEqual("89");
            expect(employee.get()).toEqual("raphsoneric@gmail.com");
            expect(employee.getGithub()).toEqual("raphson1");
            
            expect(employee.get()).toEqual("Engineer");
        })
    })
})