// >>>> import pkgs:

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import AuthScreen from "./src/screens/settings/settings.screen";
import LoginScreen from "./src/screens/auth/login/login.screen";
import SignupScreen from "./src/screens/auth/signup/signup.screen";
import TabsNavigatorWrapper from "./src/components/base/tabs-navigator-wrapper/tabs-navigator-wrapper.comp";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// >>>> RN-AUTH app:
// instantiate the stack
const RootStack = createStackNavigator();

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
    // <View style={styles.container}>
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor="#7345a8" />

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
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});
