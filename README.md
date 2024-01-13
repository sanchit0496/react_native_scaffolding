# React Native App

This app allows users to book services. Upon logging in or creating an account with Firebase authentication, the app requests location permission. Users then select a service, choose a date and time (with an option for recurring service), and proceed to the cart. They can modify their order or place it, leading to the order completion page. After completing an order, users can access their profile to track order history. The profile page displays all placed orders, allowing users to return to the homepage or log out. Logging out redirects users to the login page for the next session.

Stack : Expo (FE) + Firebase (BE)

## Libraries and Their Uses

## Navigation
- **@react-navigation/native**: Navigation library for handling routing and navigation.
- **@react-navigation/native-stack**: Manages screen transitions in a stack format.

## State Management
- **@reduxjs/toolkit**: Toolkit for efficient Redux development.

## Networking
- **axios**: HTTP client for making API requests.

## Date and Time
- **date-fns**: JavaScript library for manipulating and formatting dates.

## Compatibility
- **deprecated-react-native-prop-types**: Provides deprecated PropTypes for backward compatibility.

## Expo Modules
- **expo**: Framework for universal React apps.
- **expo-av**: Audio and video playback.
- **expo-camera**: Access to the device camera.
- **expo-file-system**: Interaction with the device file system.
- **expo-image-picker**: Image and video selection from the library or camera.
- **expo-location**: Location services like current location and location updates.
- **expo-media-library**: Access and manage media files.
- **expo-sensors**: Access to device sensors like accelerometer and gyroscope.
- **expo-splash-screen**: Management of the splash screen.
- **expo-status-bar**: Control over the status bar appearance.
- **expo-web-browser**: Opening web content in a browser.

## Firebase
- **firebase**: Platform for developing apps with backend services.

## UI and Animation
- **lottie-react-native**: Rendering animations in React Native.
- **react-native-image-slider-box**: Customizable image slider component.

## Utilities
- **moment-jalaali**: Jalaali calendar support for moment.js.

## Core React Libraries
- **react**: Library for building user interfaces.
- **react-native**: Framework for building native apps.

## UI Utilities
- **react-native-safe-area-context**: Handling safe area insets.
- **react-native-screens**: Native navigation components.

## Redux
- **react-redux**: React bindings for Redux.

## Background Tasks
- **expo-background-fetch**: Background task execution.
- **expo-secure-store**: Encrypt and store key-value pairs.

## Running the App

To run this app, follow these steps:

1. **Check for `deprecated-react-native-prop-types` Package**: 
   This package is needed for certain prop types that are deprecated in the latest versions of React Native. First, check if you have this package installed.

   If not, you can install it by running:
   ```bash
   yarn add deprecated-react-native-prop-types
   ```

2. **Modify `node_modules/react-native/index.js`**:
   After installing the package, you will need to make some changes in the `index.js` file of the `react-native` module in your `node_modules`.

   Replace the following functions in `node_modules/react-native/index.js` with the lines provided:

   ```javascript
   // Deprecated Prop Types
   get ColorPropType(): $FlowFixMe {
     return require('deprecated-react-native-prop-types').ColorPropType;
   },

   get EdgeInsetsPropType(): $FlowFixMe {
     return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
   },

   get PointPropType(): $FlowFixMe {
     return require('deprecated-react-native-prop-types').PointPropType;
   },

   get ViewPropTypes(): $FlowFixMe {
     return require('deprecated-react-native-prop-types').ViewPropTypes;
   },
   ```

   This ensures that the app uses the correct prop types from the `deprecated-react-native-prop-types` package.

Please note that modifying files in `node_modules` is generally not recommended as these changes can be overwritten by package updates. A more sustainable approach would be to fork the necessary libraries and make your changes there, or find alternative solutions that do not require altering `node_modules` directly.

## Additional Information

(You can add any additional information or instructions specific to your project here.)

For more detailed information about each library or tool, you can visit their respective documentation or GitHub repository.



