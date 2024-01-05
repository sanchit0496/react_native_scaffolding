import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
