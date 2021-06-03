// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
("@react-navigation/bottom-tabs");
import { AntDesign } from "@expo/vector-icons";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> interface:
// component interface:
interface CompProps {
  getInputVal: (t: string, n: string) => void;
  inputName: string;
  inputLabel: string;
  inputPlaceholder?: string;
}

// >>>> component:
const FormInput: React.VFC<CompProps> = ({
  getInputVal,
  inputName,
  inputLabel,
  inputPlaceholder,
}) => {
  return (
    <View style={style.inputWrapper}>
      <Text style={style.label}>{inputLabel}</Text>
      <TextInput
        placeholder={inputPlaceholder}
        editable
        maxLength={40}
        style={style.input}
        onChangeText={(t: string) => getInputVal(t, inputName)}
      ></TextInput>
    </View>
  );
};

export default FormInput;

const style = StyleSheet.create({
  inputWrapper: {
    marginTop: 10,
    flex: 1,
  },
  input: {
    borderColor: "#c2bdc4",
    borderStyle: "solid",
    height: 50,
    borderWidth: 1,
    marginVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    color: "#5c3566",
  },
});
