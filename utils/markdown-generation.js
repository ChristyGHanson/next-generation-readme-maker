// licenseBadge: This returns a license badge using Markdown.
// If there is no license, return an empty string.
function licenseBadge(license) {
    if (license.length === 0) {
        return ""
    }
    else if (license == "MIT") {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    else if (license == "Apache") {
        return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    }
    else if (license == "Mozilla") {
        return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
    }
    else if (license == "GNU") {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
    else if (license == "Boost") {
        return '![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)'
    }
    else if (license == "ISC") {
        return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
    }
}
// licenseLink: Function generates a URL hotlink to a license in this list using Markdown.
function licenseLink(license) {
    if (license.length === 0) {
    }
    else if (license == "MIT") {
        return ' [Click to view on the web.](https://opensource.org/licenses/MIT) '
    }
    else if (license == "Apache") {
        return ' [Click to view on the web.](https://opensource.org/licenses/Apache-2.0) '
    }
    else if (license == "Mozilla") {
        return ' [Click to view on the web.](https://opensource.org/licenses/MPL-2.0) '
    }
    else if (license == "GNU") {
        return ' [Click to view on the web.](https://www.gnu.org/licenses/gpl-3.0) '
    }
    else if (license == "Boost") {
        return ' [Click to view on the web.](https://www.boost.org/LICENSE_1_0.txt) '
    }
    else if (license == "ISC") {
        return ' [Click to view on the web.](https://opensource.org/licenses/ISC) '
    } else {
        return ''
    }
};

// This function will return the license section of the README file.
// If there is no license, an empty string will be returned instead. 
// Make sure the strings are fully aligned left.
function licenseSection(license) {
    if (license.length === 0) {
        return ''
    }
    else {
        return `
${licenseBadge(license)}${licenseLink(license)}
  `
    }
};

// This function will generate markdown text for the README.md file. 
// The Table of Contents will populate in the markdown that is generated. 
function markdownGenerate(data) {
    return `# ${data.title}
## License Badge

${licenseSection(data.license)} 

## Table of Contents

* [License Badge](#license-badge)
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

${data.licensenotice}
  
## Contributing
  
${data.contributing}
  
## Tests
  
${data.tests}
  
## Questions
  
For any further questions, message me on GitHub: [${data.githubusername}](https://github.com/${data.githubusername})

Alternatively, you can send me an email: [${data.emailcontact}](mailto:${data.emailcontact})`;
};

module.exports = markdownGenerate;


