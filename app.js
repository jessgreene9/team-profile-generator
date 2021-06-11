// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

if (!fs.existsSync(OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_DIR);
};

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const teamMembers = [];

const employeeRole = [
  {
    type: "list",
    name: "role",
    message: "Please select the role of the employee:?",
    choices: [
      "Engineer",
      "Intern",
      "Manager",
      "Complete roster, no employees left to add.",
    ],
  },
];

const mgrQuestions = [
  { type: "input", 
    message: "Enter name of the employee.", 
    name: "name" },
  {
    type: "input",
    message: "Enter the employee ID number.",
    name: "id",
  },
  {
    type: "input",
    message: "Enter employee email.",
    name: "email",
  },
  {
    type: "input",
    message: "Enter employee office number.",
    name: "officeNumber",
  },
];

const engineQuestions = [
  {
    type: "input",
    message: "Enter name of the employee.",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the employee ID number.",
    name: "id",
  },
  {
    type: "input",
    message: "Enter employee email.",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the employee\'s GitHub username.",
    name: "github",
  },
];

const internQuestions = [
    {
        type: "input",
        message: "Enter name of the employee.",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the employee ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter employee email.",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the employee\'s school.",
        name: "school",
      },
];

const initTeam = () => {
    inquirer.prompt(employeeRole)
    .then(generateTeam);
    };
  
    //should i make a different function for the below? and just call initTeam after each choice?
  const generateTeam = (response) =>{
    console.log(response);
        if (response.role === "Manager") {
            inquirer.prompt(mgrQuestions)
            .then(function (choice){
                console.log(choice);

            const newManager = new Manager(
                choice.name,
                choice.id,
                choice.email,
                choice.officeNumber
            );
            teamMembers.push(newManager);
            console.log('A new Manager has been added to your team.');
            initTeam();
        }
    )
} else if (response.role === "Engineer") {
  inquirer.prompt(engineQuestions)
            .then(function (choice){
                console.log(choice);

            const newEngineer = new Engineer(
                choice.name,
                choice.id,
                choice.email,
                choice.github
            );
            teamMembers.push(newEngineer);
            console.log('A new Engineer has been added to your team.');
            initTeam();
} 
  ) 
}else if (response.role === "Intern") {
  inquirer.prompt(internQuestions)
            .then(function (choice){
                console.log(choice);

            const newIntern = new Intern(
                choice.name,
                choice.id,
                choice.email,
                choice.school
            );
            teamMembers.push(newIntern);
            console.log('A new Intern has been added to your team.');
            initTeam();

})} else  {
  fs.writeFile(outputPath, render(teamMembers), (err) => {
    if (err) throw err;
    console.log("Your team has been generated into the team.html file in the output folder.");
  });
}};

initTeam();