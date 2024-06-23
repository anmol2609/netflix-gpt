# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## netflix-gpt
-create react app using command [npx create-react-app netflix-gpt](http://localhost:3000)
-configured tailwind css
-header
-login form
-sign up from
-form validation
-useRef hook
-firebase setup
-Deploying our app to production
-create signin user account
-Inplement signin user api
-create user store with userSlice
-onAuthStateChange we use from firebase to reduce use of dispatch function
-implement signout
-update profile
-fetch movies from TMDB
-bug fix of update profile image
bug fix of redirect user to browse page is person is logged in and want to get login page
-unsubscribed to onAuthChanged Callback into header file
-add hardcodeed value to constant.js file
- comment strict mode in index.js because it execute api call twice sometime just to check consistency in the application but it is only in developent mode not in when we push our code into the server this is for good purpose
-now we will create custom hook for tmdb api data in the browse page to show data
-custom hook for now playing movie
-planing for main container
-fetch data for trailer video
-update sote with trailer  data
-embded the youtube video make it auto play and mute
-added tailwind css  to make main container look awesome
## features
-login/sign-up 
    -Sign In
-Browse (after authentication)
    -Header
    -main movie
        -trailer in background
        -title and Description
        -movie suggestions
            -movielists * N
-netfilx-gpt
    -search bar
    -movie suggestions


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
