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


// an empty array to push each team member into as the user selects and enters employees
const teamMembers = [];

// array of questions for the initial selection of type of employee
const employeeRole = [
  {
    type: "list",
    name: "role",
    message: "Please select the role of the employee:?",
    choices: [
      "Engineer",
      "Intern",
      "Manager",
      "There are no more employees to add.",
    ],
  },
];


//questions if they select 'manager'
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

//questions if they select 'engineer'
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


//questions if they select 'intern'
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

//function to initialize prompts
const initTeam = () => {
    inquirer.prompt(employeeRole)
    .then(generateTeam);
    };
  
  //  function to generate team
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
  /*renders html file once they select that there are no team members to add and a message
  logged to console*/
  fs.writeFile(outputPath, render(teamMembers), (err) => {
    if (err) throw err;
    console.log("Your team has been generated into the team.html file in the output folder.");
  });
}};

initTeam();
