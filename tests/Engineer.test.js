const Engineer = require('../lib/Engineer')

describe ("Engineer Test", () => {
    describe("Object Creation", () => {
        it("Should give an Engineer", () => {
            const engineer = new Engineer("Eric", "89", "raphsoneric@gmail.com", "raphson1")
            expect(engineer.getName()).toEqual("Eric");
            expect(engineer.getId()).toEqual("89");
            expect(engineer.getEmail()).toEqual("raphsoneric@gmail.com");
            expect(engineer.getGithub()).toEqual("raphson1");
            
            expect(engineer.get()).toEqual("Engineer");
        })
    })
})