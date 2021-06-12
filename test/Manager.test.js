

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = 5553459999;
    const employee = new Manager("Seth", 30, "example@example.com", officeNumber);
    expect(employee.officeNumber).toEqual(officeNumber);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const employee = new Manager("Seth", 30, "example@example.com", 5553459999);
    expect(employee.getRole()).toEqual(role);
});

test("Can get office number via getOffice()", () => {
    const officeNumber = 5553459999;
    const employee = new Manager("Seth", 30, "example@example.com", officeNumber);
    expect(employee.getOfficeNumber()).toEqual(officeNumber);
});
