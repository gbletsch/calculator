# Calculator

**Tier:** 1-Beginner

Calculators are not only one of the most useful tools available, but they are
also a great way to understand UI and event processing in an application. In
this problem you will create a calculator that supports basic arithmetic
calculations on integers.

The styling is up to you so use your imagination and get creative! You might
also find it worth your time to experiment with the calculator app on your
mobile device to better understand basic functionality and edge cases.

### Constraints

- You may not use the `eval()` function to execute calculations

## User Stories

-   [X] User can see a display showing the current number entered or the
result of the last operation.
-   [X] User can see an entry pad containing buttons for the digits 0-9, 
operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC'
button (for clear all).
-   [X] User can enter numbers as sequences up to 8 digits long by clicking on
digits in the entry pad. Entry of any digits more than 8 will be ignored.
-   [X] User can click on an operation button to display the result of that
operation on:
    * the result of the preceding operation and the last number entered OR
    * the last two numbers entered OR
    * the last number entered
-   [X] User can click the 'C' button to clear the last number or the last
operation. If the users last entry was an operation the display will be
updated to the value that preceded it.
-   [X] User can click the 'AC' button to clear all internal work areas and
to set the display to 0.
-   [ ] User can see 'ERR' displayed if any operation would exceed the 
8 digit maximum.

## Bonus features

-   [ ] User can click a '+/-' button to change the sign of the number that is
currently displayed.
-   [ ] User can see a decimal point ('.') button on the entry pad to that 
allows floating point numbers up to 3 places to be entered and operations to
be carried out to the maximum number of decimal places entered for any one
number.

## Useful links and resources

- [Calculator (Wikipedia)](https://en.wikipedia.org/wiki/Calculator)
- [MDN](https://developer.mozilla.org/en-US/)

## Example projects

- [Javascript Calculator](https://codepen.io/giana/pen/GJMBEv)
- [React Calculator](https://codepen.io/mjijackson/pen/xOzyGX)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
