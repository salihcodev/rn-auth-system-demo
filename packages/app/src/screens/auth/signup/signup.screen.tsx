// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import AuthSignupForm from "../../../components/base/auth/auth-signup-form/auth-signup-form.comp";

// >>>> screen:
const SignupScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <AuthSignupForm navigate={navigate} />
    </View>
  );
};

export default SignupScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 50,
  },
});
