# Civic Duty

An app designed to give more information about the candidates to voters and also helps people register to vote. 

## Needed Dependencies

### npm

First, you will need to download Node.js [here](https://nodejs.org/en/download/). This will install Node, as well as the Node Package
Manager (or npm). 

### Additional 

Now that we have access to Node and the package manager, please navigate to the `CMPS115/frontend` folder and run the following commands in 
your terminal to install the additional dependencies:

* `npm install`
* `npm install --save -g react-native@0.55.4`
* `npm install --save -g react-navigation`
* `npm install --save -g expo` 
* `npm install --save -g react-native-checkbox-form`
* `npm install --save -g tcomb-form-native`

## How To Start

Since we are still in beta, you will need the Expo app on your mobile device to start the app.

In your terminal, navigate to `CMPS115/frontend` directory and type `npm start` to begin the server. In Expo, click `Scan QR Code` and
point it at the QR code that your terminal command should have generated (you may need to press `q` to start -- this is a bug with React
Native). Your phone should have loaded the app!

## Known Bugs

### Front End

* Images of some politicians may not display. This means that they do not have an image for them in the Google Civic API, and the Google
Image API we use to handle these exceptions exceeds the daily use limit.
* React Native will not launch in Windows on the latest version 0.56.0 as of 7/18/2018 and will hang on either a red error screen
or a blank white screen. To fix the issue, revert back to the previous version 0.55.4 with the terminal command
`npm install -g react-native@0.55.4`
* Browser version of React Native editor (Expo Snack) is NOT compatible with the CLI version. It gives a cannot resolve dependencies
error which does not allow us to open our functioning project properly.
* API calls are wonky on school networks, cruznet seems to block outgoing HTTP GET requests and ResWifi is really strange with 
the Expo app
* Occasionally when the Expo app starts it fails to connect with the development server.
* React Navigator has a bug with centering the headers on Android. We still cannot get the headers to center properly.

### Back End

* When fetching images for representatives, accuracy of subject tends to go down as importance goes down (state senator might be less
well-known as majority house whip, etc).
* One API only has 100 free requests per day, so sometimes images won’t load. We believe we have a fix for it, but it still may happen.
* Some links may be broken, no method to check for right now.

### Unit Testing

* React Native uses JavaScript unit testing to test for bugs and errors.
* To run the unit test do the following:
* Open the terminal
* Change the directory to the project folder
* Enter the script: `npm test`
* Evaluate error log
* For more addtional [info](https://facebook.github.io/react-native/docs/testing) about JavaScript unit test.
