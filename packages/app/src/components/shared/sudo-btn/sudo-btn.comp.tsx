// >>>> import pkgs:
import * as React from "react";
import { View, StyleSheet } from "react-native";
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
    <View style={style.altSudoBtn}>{children}</View>
  ) : (
    <View style={style.sudoBtn}>{children}</View>
  );
};

export default SudoBtn;

const style = StyleSheet.create({
  sudoBtn: {
    backgroundColor: "#5c3566",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    borderRadius: 5,
  },
  altSudoBtn: {
    backgroundColor: "#ffffff",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    borderRadius: 5,
  },
});
