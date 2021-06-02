// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> screen:
const ProfileScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <View style={style.profileWrapper}>
        <Text style={style.profileHeading}>Your profile</Text>
        <TouchableOpacity onPress={() => navigate("LoginScreen")}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("SignupScreen")}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileWrapper: {
    alignItems: "center",
    top: 30,
  },
  profileHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#9494a1",
  },
});
