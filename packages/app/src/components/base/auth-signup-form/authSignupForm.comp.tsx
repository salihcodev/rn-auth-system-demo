// >>>> import pkgs:
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
("@react-navigation/bottom-tabs");
import { AntDesign } from "@expo/vector-icons";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import FormInput from "../../shared/form-input/formInput.comp";
import SudoBtn from "../../shared/sudo-btn/sudo-btn.comp";

// >>>> interface:
// components interface
export interface formDataInterface {
  email: string | null;
  password: string | null;
}

// >>>> component:
const AuthSignupForm = ({ navigate }: any) => {
  // login form schema
  const formSchema = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmedPassword: null,
  };

  // inputs value:
  const [formData, setFormData] = React.useState<formDataInterface>(formSchema);

  return (
    <View style={style.formWrapper}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={style.formHeading}>Signup</Text>
        <View style={style.combinedInput}>
          <FormInput
            inputName="firstName"
            inputLabel="first name"
            inputPlaceholder="John"
            getInputVal={(text: string, name: string) =>
              setFormData({ ...formData, [name]: text })
            }
          />
          <Text style={style.spacer}></Text>
          <FormInput
            inputName="lastName"
            inputLabel="last name"
            inputPlaceholder="Wick"
            getInputVal={(text: string, name: string) =>
              setFormData({ ...formData, [name]: text })
            }
          />
        </View>
        <FormInput
          inputName="email"
          inputLabel="Email"
          inputPlaceholder="john.wi8@gmail.com"
          getInputVal={(text: string, name: string) =>
            setFormData({ ...formData, [name]: text })
          }
        />
        <FormInput
          inputName="password"
          inputLabel="Password"
          inputPlaceholder="12345"
          getInputVal={(text: string, name: string) =>
            setFormData({ ...formData, [name]: text })
          }
        />
        <FormInput
          inputName="confirmedPassword"
          inputLabel="Confirm password"
          inputPlaceholder="12345"
          getInputVal={(text: string, name: string) =>
            setFormData({ ...formData, [name]: text })
          }
        />
        <View style={style.btnWrapper}>
          <SudoBtn>
            <TouchableOpacity style={style.btnStyles} onPress={() => {}}>
              <Text style={{ color: "#FFF" }}>Signup</Text>
            </TouchableOpacity>
          </SudoBtn>
        </View>
        <View style={style.outTheForm}>
          <Text>You already have an account?</Text>
          <TouchableOpacity onPress={() => navigate("LoginScreen")}>
            <Text style={style.subText}>signin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthSignupForm;

const style = StyleSheet.create({
  btnStyles: {
    color: "#fff",
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formHeading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9494a1",
  },
  combinedInput: { flexDirection: "row" },
  btnWrapper: {
    marginTop: 50,
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: "#999",
    borderStyle: "solid",
    backgroundColor: "#6f417a",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
  },
  outTheForm: {
    paddingTop: 10,
    alignItems: "center",
  },
  subText: { color: "#6f417a" },
  spacer: {
    width: 10,
  },
});
