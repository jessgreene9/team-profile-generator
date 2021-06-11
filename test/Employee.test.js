// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const newEmployee = new Employee();
    expect(newEmployee instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
    const name = "Seth";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toEqual(name)
});

test("Can set id via constructor argument", () => {
    const newId = 30;
    const newEmployee = new Employee("name", newId);
    expect(newEmployee.id).toEqual(newId);
});

test("Can set email via constructor argument", () => {
    const newEmail = "example@example.com";
    const newEmployee = new Employee("name", 30, newEmail);
    expect(newEmployee.email).toEqual(newEmail);

});

test("Can get name via getName()", () => {
    const name = "Seth";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toEqual(name);

});

test("Can get id via getId()", () => {
    const newId = 30;
    const newEmployee = new Employee("name", newId);
    expect(newEmployee.getId()).toEqual(newId);
});



test("Can get email via getEmail()", () => {
    const newEmail = "example@example.com";
    const newEmployee = new Employee("name", 30, newEmail);
    expect(newEmployee.getEmail()).toEqual(newEmail);
});

test("getRole() should return \"Employee\"", () => {
    const getEmployee = "Employee";
    const newEmployee = new Employee("Seth", 30, "example@example.com");
    expect(newEmployee.getRole()).toEqual(getEmployee);
});
