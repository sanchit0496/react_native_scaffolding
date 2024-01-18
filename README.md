# React Native App Scaffolding

This app allows users to book services. Upon logging in or creating an account with Firebase authentication, the app requests location permission. Users then select a service, choose a date and time (with an option for recurring service), and proceed to the cart. They can modify their order or place it, leading to the order completion page. After completing an order, users can access their profile to track order history. The profile page displays all placed orders, allowing users to return to the homepage or log out. Logging out redirects users to the login page for the next session

Stack : Expo (Frontend) + Firebase (Backend)

## Libraries and Their Usage

### Navigation
- **@react-navigation/native**: For routing and navigation.
- **@react-navigation/native-stack**: Manages the screen transitions.

### State Management
- **@reduxjs/toolkit**: Efficient Redux development toolkit.

### Networking
- **axios**: HTTP client for API requests.

### Date and Time
- **date-fns**: JavaScript library for date manipulation and formatting.

### Compatibility
- **deprecated-react-native-prop-types**: Backward compatibility for PropTypes.

### Expo Modules
- **expo**: Framework for universal React apps.
- **expo-av**: Audio and video playback.
- **expo-camera**: Device camera access.
- **expo-file-system**: Local file system interaction.
- **expo-image-picker**: Image and video selection.
- **expo-location**: Location services.
- **expo-media-library**: Media file management.
- **expo-sensors**: Access to device sensors.
- **expo-splash-screen**: Splash screen management.
- **expo-status-bar**: Status bar appearance control.
- **expo-web-browser**: Browser content access.

### Firebase
- **firebase**: Platform for app development and backend services.

### UI and Animation
- **lottie-react-native**: Animation rendering.
- **react-native-image-slider-box**: Customizable image slider.

### Utilities
- **moment-jalaali**: Jalaali calendar support for moment.js.

### Core React Libraries
- **react**: UI building library.
- **react-native**: Native app framework.

### UI Utilities
- **react-native-safe-area-context**: Safe area insets handling.
- **react-native-screens**: Native navigation components.

### Redux
- **react-redux**: React bindings for Redux.

### Background Tasks
- **expo-background-fetch**: Background task execution.
- **expo-secure-store**: Key-value pair encryption and storage.

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
For more detailed information about each library or tool, you can visit their respective documentation or GitHub repository.

## Useful Links

- **Setup Firebase and Expo Account to leverage notification system into application**:
https://docs.expo.dev/push-notifications/push-notifications-setup/#get-credentials-for-development-builds

- **For Gradle and Kotlin Error**:
https://stackoverflow.com/questions/76862279/eas-build-fails-with-error-execution-failed-for-task-expo-splash-screencompil