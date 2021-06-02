// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> screen:
const LoginScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <Text>Login</Text>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});
