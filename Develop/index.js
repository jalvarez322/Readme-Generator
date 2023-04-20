// TODO: Include packages needed for this application

// generateMarkdown, fs, inquirer@8.2.4
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("inquirer");
const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
   type: 'input'
   message: "What is the tiel of your project?",

  ];
  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
  
      // return the writeFile method using fileName and data being passed in
  }
  
  
  // TODO: Create a function to initialize app
  function init() {
  
      // inquirer goes in here -> questions passed as argument --- .then call back function (writeToFile(){}) will will use generateMarkdown as data source --- pass data from inquirer into this!! how is spread operator to be used in this?
  }
  
  // Function call to initialize app
  init();
