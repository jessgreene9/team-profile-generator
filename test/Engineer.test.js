

const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const github = "GitHubProfile";
    const employee = new Engineer ("name", 30, "example@example.com", github);
    expect(employee.github).toEqual(github);
});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const employee = new Engineer ("name", 30, "example@example.com", "gitHubProfile");
    expect(employee.getRole()).toEqual(role);
});

test("Can get GitHub username via getGithub()", () => {
    const github = "GitHubProfile";
    const employee = new Engineer ("name", 30, "example@example.com", github);
    console.log(employee);
    expect(employee.getGithub()).toEqual(github);
});
