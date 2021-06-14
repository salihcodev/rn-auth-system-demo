// >>>> import pkgs:

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Provider } from "react-redux";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import store from "./src/redux/store";
import AuthScreen from "./src/screens/settings/settings.screen";
import LoginScreen from "./src/screens/auth/login/login.screen";
import SignupScreen from "./src/screens/auth/signup/signup.screen";
import TabsNavigatorWrapper from "./src/components/base/tabs-navigator-wrapper/tabs-navigator-wrapper.comp";

// instantiate the stack
const RootStack = createStackNavigator();

// >>>> RN-AUTH app:
export default function App() {
  // get header title:
  function getHeaderTitle(route: any) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";

    switch (routeName) {
      case "HomeScreen":
        return "RN Auth";
      case "ProfileScreen":
        return "My profile";
      case "SettingsScreen":
        return "Settings";
    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="#5c3566" />

        {/* tabs navigators wrapper */}
        <RootStack.Navigator initialRouteName="HomeScreen">
          {/* screens routers */}
          {/* Home */}
          <RootStack.Screen
            name="HomeScreen"
            component={TabsNavigatorWrapper}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
            })}
          ></RootStack.Screen>

          {/* Auth */}
          <RootStack.Screen
            name="AuthScreen"
            component={AuthScreen}
          ></RootStack.Screen>

          {/* Signup */}
          <RootStack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              title: "Signup",
            }}
          ></RootStack.Screen>

          {/* login */}
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: "Login",
            }}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});
