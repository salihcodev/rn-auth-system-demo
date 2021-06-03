// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
("@react-navigation/bottom-tabs");
import { AntDesign } from "@expo/vector-icons";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> interface:
// components interface
export interface CompProps {
  altBtn?: boolean;
  children: JSX.Element;
}

// >>>> component:
const SudoBtn: React.VFC<CompProps> = ({ altBtn, children }) => {
  return altBtn ? (
    <View style={style.altLoginBtn}>{children}</View>
  ) : (
    <View style={style.loginBtn}>{children}</View>
  );
};

export default SudoBtn;

const style = StyleSheet.create({
  loginBtn: {
    backgroundColor: "#5c3566",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    borderRadius: 5,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
  },
  altLoginBtn: {
    backgroundColor: "#1b191b",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    borderRadius: 5,
  },
  altLoginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
  },
});
