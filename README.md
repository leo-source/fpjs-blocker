# FPjs-Blocker

FPjs-Blocker is a Chrome extension that allows you to block certain network requests using declarative rules. It provides a simple checkbox interface to enable or disable the blocking of network requests to specific domains.

## Table of Contents

- [FPjs-Blocker](#fpjs-blocker)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Files](#files)


## Installation

To install the FPjs-Blocker extension, follow these steps:

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch in the top right corner of the page.
4. Click on the "Load unpacked" button and select the folder where you cloned/downloaded this repository.
5. The extension should now be installed and visible in the extensions list.

## Usage

1. After installation, you should see the FPjs-Blocker icon in the browser's toolbar.
2. Click on the FPjs-Blocker icon to open the extension's popup menu.
3. Inside the popup, you'll find a checkbox labeled "Block FPJS". Check or uncheck the box to enable or disable the blocking of network requests to "fptls.com".
4. The extension will remember your choice, and network requests will be blocked or allowed accordingly.

## Files

* `manifest.json`: Extension manifest
* `index.html`: Popup UI with checkbox
* `main.js`: Javascript logic for saving state and enabling/disabling blocking
* `style.css`: Styles for popup
* `rule_1.json`: Declarative net request ruleset to block _**fptls**_

