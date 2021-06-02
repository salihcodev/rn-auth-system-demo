// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> screen:
const HomeScreen = ({ navigation: { navigate } }: any) => {
  return (
    <View style={style.pageWrapper}>
      <Text style={style.mainHeading}>So you wanna auth yourself, hah? </Text>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ece8e8",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeading: {
    fontSize: 20,
    top: -100,
    color: "#9494a1",
    fontWeight: "bold",
  },
});
