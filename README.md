# Password Generator
## Description

The primary goal of this project is to use JavaScript to create an application that allows the user to generate a random password based on 5 criteria. This app features dynamically updated HTML and CSS and runs in the browser.

The secondary goal is the exercise the use of Javascript and apply the knowledge learned this week to a practical project, and really understand how it is put into use in day to day applications. Through this project, I was able to assign variables, select elements, create functions and arguments, create random number generators, push content into empty variables, use if...else statements, use for loops, manipulate event handlers, and utilize window prompts/alerts in order to create a functional application.


## Installation

You can open the webpage in your web browser using this URL:

## Usage
Features implemented on this webpage:
* The user can generate a secure password by clicking the "Generate Password" button.
* When button is clicked, a series of prompts for password criteria is presented to the user, from which the user can choose the password length, as well as the inclusion of lowercase,  uppsercase, numeric, and/or special characters.
* If user inputs non-numbers in the prompt for password length, and error message appears and notifies the user that they must use numbers.
* If the user inputs a number less than 8 or greater than 128, an error message appears, notifies the user that they must input a number between 8 - 128.
* If the user selects "cancel" for all character type criteria, an error message appears, and notifies the user that they must select at least one character type.
* After the password is successfully generated, the user can click the "Copy Password" button to copy the password onto their clipboard. A message appears to alert the user that the password has been successfully copied.
* If the user clicks the "Copy Password" button before the password has been successfully generated, an error message appears and notifies the user that there is nothing to copy. 

The following video demonstrates application functionality
![Webpage Screenshot](./assets/password-generator-demo.mp4)

## Credits
Referenced the following resources to complete this project:
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
* https://www.w3schools.com/jsref/jsref_split.asp
* https://www.w3schools.com/js/js_random.asp
* https://www.youtube.com/c/WebDevSimplified
* https://www.youtube.com/channel/UCBS4_JDUSYG8agyTpvvjNrA

## License
Please refer to the LICENSE in the repo.
