This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is a weather widget build with React library, Sass and react-bootstrap

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

### Todo:
1. If I have much time, will finish the animation of the presentational component, hoping to achieve a flip card effect when props change.
2. This widget can also be implemented by React Hooks with Context API, I may consider build another version of it.

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
