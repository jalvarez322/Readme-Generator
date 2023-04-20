// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // this will use data passed in from generateMarkdown function. have a logic gate to make sure a license was chosen.
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license link - this is internally in the .md file...a link to the license section
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // this will use data passed in from generateMarkdown function. have a logic gate to make sure a license was chosen.
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // this will use data passed in from generateMarkdown function.  have a logic gate to make sure a license was chosen.
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
`;
  // you will need to use the license functions in here ^, passing data to the functions you call -- licenseFunction(data.license)
}

module.exports = generateMarkdown;