function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      var badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return badge;
    case 'MIT':
      var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return badge;
    case 'GNU GPLv3':
      var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      return badge;
    case 'Mozilla Public License 2.0':
      var badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      return badge;
    case 'None':
      var badge = "";
      return badge;
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      var link = "https://www.apache.org/licenses/LICENSE-2.0.txt";
      return link;
    case 'MIT':
      var link = "https://www.mit.edu/~amini/LICENSE.md";
      return link;
    case 'GNU GPLv3':
      var link = "https://www.gnu.org/licenses/gpl-3.0.md";
      return link;
    case 'Mozilla Public License 2.0':
      var link = "https://www.mozilla.org/en-US/MPL/2.0/";
      return link;
    case 'None':
      var link = "";
      return link;
  }
}

function renderLicenseSection(license, link) {
  if (license !== "None") {
    var licenseSection = 
    `This project's license is [${license}]\n\nFor more information, go to ${link}`
    return licenseSection;
  } else {
    var licenseSection = "No license provided."
    return licenseSection;
  }
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
