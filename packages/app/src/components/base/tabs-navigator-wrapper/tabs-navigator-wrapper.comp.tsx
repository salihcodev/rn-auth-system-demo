// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import HomeScreen from "../../../screens/home/home.screen";
import SettingsScreen from "../../../screens/settings/settings.screen";
import ProfileScreen from "../../../screens/profile/profile.screen";

// create tab navigator
const Tab = createBottomTabNavigator();

// >>>> screen:
const TabsNavigatorWrapper = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: style.navigator,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: any): JSX.Element => (
            <View style={style.routeContainer}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#7345a8" : "#9494a1"}
              />
              {/* {focused ? <Text style={style.routeActivePoint}></Text> : null} */}
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }: any): JSX.Element => (
            <View style={(style.routeContainer, style.MiddleRoute)}>
              <AntDesign
                name="user"
                size={24}
                color={focused ? "#7345a8" : "#9494a1"}
              />
              {/* {focused ? <Text style={style.routeActivePoint}></Text> : null} */}
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }: any): JSX.Element => (
            <View style={style.routeContainer}>
              <AntDesign
                name="setting"
                size={24}
                color={focused ? "#7345a8" : "#9494a1"}
              />
              {/* {focused ? <Text style={style.routeActivePoint}></Text> : null} */}
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabsNavigatorWrapper;

// colors:
const color = {
  main: {
    color: "#9494a1",
  },
  activeRoute: {
    color: "#7345a8",
  },
};

const style = StyleSheet.create({
  navigator: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 80,
  },
  routeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  MiddleRoute: {
    bottom: 35,
    backgroundColor: "#ffffff",
    width: 60,
    height: 60,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ece8e8",
    borderWidth: 7,
    borderStyle: "solid",
  },
  // routeActivePoint: {
  //   width: 6,
  //   height: 6,
  //   backgroundColor: "#7345a8",
  //   borderRadius: 50,
  //   marginTop: 8,
  // },
});
