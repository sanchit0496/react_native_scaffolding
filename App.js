/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./StackNavigation";
import store from "./store";

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage", 
                    "Non-serializable values were found in the navigation state. Check:"
                  ]);

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}