const Intern = require('./lib/Intern')


describe("Intern Test", () => {
    describe("Object Creation", () => {
        it("should give Intern", () => {
            const intern = new Intern("Eric", "89", "raphsoneric@gmail.com", "Universty Of Texas")
            expect(employee.getName()).toEqual("Eric");
            expect(employee.getId()).toEqual("89");
            expect(employee.getEmail()).toEqual("raphsoneric@gmail.com");
            expect(employee.getSchool()).toEqual("Universty of Texas");
            expect(employee.getRole()).toEqual("Intern");
        })
    })
})