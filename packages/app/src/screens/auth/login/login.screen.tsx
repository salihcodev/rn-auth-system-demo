// >>>> import pkgs:
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { View, StyleSheet } from "react-native";

// >>>> import utils: ... anything created-modified by the developer'
import AuthLoginForm from "../../../components/base/auth/auth-login-form/auth-login-form.comp";


// >>>> screen:
const LoginScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <AuthLoginForm navigate={navigate} />
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 50,
  },
});
