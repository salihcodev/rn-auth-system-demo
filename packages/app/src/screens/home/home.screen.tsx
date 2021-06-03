// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import SudoBtn from "../../components/shared/sudo-btn/sudo-btn.comp";

// >>>> screen:
const HomeScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <View style={style.container}>
        <Text style={style.mainHeading}>So you wanna auth yourself, hah? </Text>
        <View style={style.loggingControllers}>
          <View style={style.loggingCont}>
            <SudoBtn altBtn>
              <TouchableOpacity
                style={style.btnStyles}
                onPress={() => navigate("LoginScreen")}
              >
                <Text style={{ color: "#FFF" }}>Login</Text>
              </TouchableOpacity>
            </SudoBtn>
          </View>
          <Text style={style.spacer}></Text>
          <View style={style.loggingCont}>
            <SudoBtn>
              <TouchableOpacity
                style={style.btnStyles}
                onPress={() => navigate("SignupScreen")}
              >
                <Text style={{ color: "#FFF" }}>Signup</Text>
              </TouchableOpacity>
            </SudoBtn>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  btnStyles: {
    color: "#fff",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    top: 200,
  },
  mainHeading: {
    color: "#9494a1",
    fontWeight: "bold",
    fontSize: 20,
  },
  loggingControllers: {
    marginTop: 30,
    flexDirection: "row",
  },
  loggingCont: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  spacer: {
    width: 10,
  },
});
