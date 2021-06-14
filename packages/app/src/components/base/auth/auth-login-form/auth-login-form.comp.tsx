// >>>> import pkgs:
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
("@react-navigation/bottom-tabs");

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import FormInput from "../../../shared/form-input/formInput.comp";
import SudoBtn from "../../../shared/sudo-btn/sudo-btn.comp";
import { authLoginHandler } from "../auth-logging.events";
import {
  authLoginFormTypes,
  userStoreTypes,
} from "../../../../interfaces/auth/auth.interfaces";

// >>>> component:
const AuthLoginForm = ({ navigate }: any) => {
  // >>>> builtin hooks:
  const dispatch = useDispatch();

  // return state to choose and extract:
  const { stage } = useSelector(
    ({ user: { user, stage } }: userStoreTypes) => ({
      user,
      stage,
    })
  );

  // login form schema
  const formSchema = {
    email: null,
    password: null,
  };

  // inputs value:
  const [formData, setFormData] =
    React.useState<authLoginFormTypes>(formSchema);

  return (
    <View style={style.formWrapper}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={style.formHeading}>Login</Text>
        <FormInput
          inputName="email"
          inputLabel="Email"
          inputPlaceholder="john@gmail.com"
          getInputVal={(text: string, name: string) =>
            setFormData({ ...formData, [name]: text })
          }
        />
        <FormInput
          inputName="password"
          inputLabel="Password"
          inputPlaceholder="fd9$932^&fg%6g8*"
          getInputVal={(text: string, name: string) =>
            setFormData({ ...formData, [name]: text })
          }
        />
        <View style={style.btnWrapper}>
          {stage === `BUSY` ? (
            <SudoBtn>
              <TouchableOpacity
                style={style.btnStyles}
                onPress={() => dispatch(authLoginHandler(formData))}
              >
                <Text style={{ color: "#FFF" }}>
                  <Text>Loading...</Text>
                  <Image
                    style={{ width: 20, height: 20, top: 5, left: 10 }}
                    source={require(`../../../../../assets/imgs/loading.gif`)}
                  />
                </Text>
              </TouchableOpacity>
            </SudoBtn>
          ) : (
            <SudoBtn>
              <TouchableOpacity
                style={style.btnStyles}
                onPress={() => dispatch(authLoginHandler(formData))}
              >
                <Text style={{ color: "#FFF" }}>Login</Text>
              </TouchableOpacity>
            </SudoBtn>
          )}
        </View>
        <View style={style.outTheForm}>
          <Text>You don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigate("SignupScreen")}>
            <Text style={style.subText}>signup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthLoginForm;

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
