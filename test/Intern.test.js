

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = "UNCW";
    const employee = new Intern("Seth", 30, "example@example.com", school);
    expect(employee.school).toEqual(school);
});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const employee = new Intern("Seth", 30, "example@example.com","UNCW");
    expect(employee.getRole()).toEqual(role);
});

test("Can get school via getSchool()", () => {
    const school = "UNCW";
    const employee = new Intern("Seth", 30, "example@example.com", school);
    expect(employee.getSchool()).toEqual(school);
});
