// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.length === 0) {
        return ""
    }
    else if (license == "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    }
    else if (license == "Apache") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    }
    else if (license == "Mozilla") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    }
    else if (license == "GNU") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    }
    else if (license == "Boost") {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    }
    else if (license == "ISC") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    }
}
// The function returns the license link
// If there is no license, the program returns an empty string.
function renderLicenseLink(license) {
    if (license.length === 0) {
        return ""
    }
    else if (license == "MIT") {
        return '(https://opensource.org/licenses/MIT)'
    }
    else if (license == "Apache") {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    else if (license == "Mozilla") {
        return `https://opensource.org/licenses/MPL-2.0`
    }
    else if (license == "GNU") {
        return `https://www.gnu.org/licenses/gpl-3.0`
    }
    else if (license == "Boost") {
        return `https://www.boost.org/LICENSE_1_0.txt`
    }
    else if (license == "ISC") {
        return `https://opensource.org/licenses/ISC`
    } else {
        return ''
    }
};

// This function will return the license section of the README file.
// If there is no license, an empty string will be returned instead. 
function renderLicenseSection(license) {
    if (license.length === 0) { return "" }
    else {
        return `## License

${renderLicenseBadge(license)}${renderLicenseLink(license)}
  `
    }
};

// This function will generate markdown text for the README.md file. 
// The Table of Contents will populate in the markdown that is generated. 
function markdownGenerate(data) {
    return `# ${data.title}
    
${renderLicenseSection(data.license)} 

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
  
## Description
  
${data.description}
  
## Installation
  
${data.installation}
    
## Usage
  
${data.usage}

## License

${data.license}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
For any questions, message me on GitHub: [${data.githubusername}](https://github.com/${data.githubusername})

Alternatively, you can send me an email: [${data.emailcontact}](mailto:${data.emailcontact})`;
};

module.exports = markdownGenerate;


