## This is a weather widget build with React library, Sass and react-bootstrap

### Install instruction:

1. cd into weather-widget
2. run npm install in terminal
3. run npm run start
4. get in http://localhost:3000 or http://localhost:3000/weather-widget in your browser

### Assumptions:

1. this widget has default setting
2. the value of title-of-widget will be "title of widget" when empty
3. when turn off the wind it will disappear from the page
4. Max length of title is 25

### Features

1. Store the weather data in localStorage if the fetching is successful, so next time the user doesn't need to fetch again.
2. Build a spinner to reduce FPT, offers better user experience.
3. Considering this widget does not have many states, use react state for state management rather than redux, keep it simple and concise.
4. Use eslint and stylelint for code checking to avoid typo and keep code consistence(whitespace, tab and indentation).
5. Use normalize.css to avoid cross-browser compatibility problems.
6. Use bootstrap Grid System for fully responsive design.
7. Provide a theme option for users to switch dark/light theme.
8. Perform several unit testing cases to ensure function's logic and component structure

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
