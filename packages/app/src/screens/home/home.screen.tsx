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
        <View style={style.startPoint}>
          <SudoBtn>
            <TouchableOpacity
              style={style.btnStyles}
              onPress={() => navigate("ProfileScreen")}
            >
              <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                Let's start your journey
              </Text>
            </TouchableOpacity>
          </SudoBtn>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    top: 200,
    paddingHorizontal: 20,
  },
  mainHeading: {
    color: "#9494a1",
    textTransform: "uppercase",
    fontSize: 27,
  },
  btnStyles: {
    color: "#fff",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startPoint: { marginTop: 30 },
});
