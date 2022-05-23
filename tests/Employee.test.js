const Employee = require("../lib/Employee");

describe("Employee Test", ()=>{
    describe("Object Creation", ()=> {
        it("Should give an Employee info", ()=> {
            const employee = new Employee("Eric", "89", "raphsoneric@gmail.com")
            expect(employee.getName()).toEqual("Eric");
            expect(employee.getId()).toEqual("89");
            expect(employee.getEmail()).toEqual("raphsoneric@gmail.com")

            expect(employee.getRole()).toEqual("Employee")

        })
    })
})