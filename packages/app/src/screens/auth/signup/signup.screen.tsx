// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> screen:
const SignupScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <Text>Signup</Text>
    </View>
  );
};

export default SignupScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});
