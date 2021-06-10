// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const gitHub = "GitHubProfile";
    const employee = new Engineer ("name", 30, "example@example.com", gitHub);
    expect(employee.gitHub).toEqual(gitHub);
});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const employee = new Engineer ("name", 30, "example@example.com", "gitHubProfile");
    expect(employee.getRole()).toEqual(role);
});

test("Can get GitHub username via getGithub()", () => {
    const gitHub = "GitHubProfile";
    const employee = new Engineer ("name", 30, "example@example.com", gitHub);
    expect(employee.getGithub()).toEqual(gitHub);
});
