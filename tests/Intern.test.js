const Intern = require('../lib/Intern')


describe("Intern Test", () => {
    describe("Object Creation", () => {
        it("should give Intern", () => {
            const intern = new Intern("Eric", "89", "raphsoneric@gmail.com", "Universty Of Texas")
            expect(intern.getName()).toEqual("Eric");
            expect(intern.getId()).toEqual("89");
            expect(intern.getEmail()).toEqual("raphsoneric@gmail.com");
            expect(intern.getSchool()).toEqual("Universty Of Texas");
            expect(intern.getRole()).toEqual("Intern");
        })
    })
})