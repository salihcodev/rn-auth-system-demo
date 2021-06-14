// >>>> import pkgs:
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

// >>>> import utils:  ... anything created-modified by the developer'
import SudoBtn from "../../components/shared/sudo-btn/sudo-btn.comp";
import { getLocalDataAsObj } from "../../utils/device-storage-controllers/localStorage.controllers";
import { logoutUser } from "../../components/base/auth/auth-logging.slice";

// >>>> screen:
const ProfileScreen = ({ navigation: { navigate } }: any) => {
  // builtin hooks:
  const dispatch = useDispatch();

  // extract current authed user data from local storage:
  const [authedUser, setAuthedUser] = React.useState<any>(null);

  const extractUserData = async () => {
    const res = await getLocalDataAsObj("currentAuthedUser");

    const data = res != null ? JSON.parse(res) : null;
    setAuthedUser(data);
  };

  React.useEffect(() => {
    extractUserData();
  }, [authedUser]);

  console.log(authedUser);

  const userEmail = authedUser?.result.email;
  const userName = authedUser?.result.name;

  return (
    <View style={style.pageWrapper}>
      <View style={style.profileWrapper}>
        <Text style={style.profileHeading}>
          {userName ? `Greetings, ${userName?.split(" ")[0]}` : `Greetings...`}
        </Text>
        <Text style={{ textAlign: "center" }}>How are you doing tody?</Text>

        <View style={style.profileContainer}>
          {authedUser ? (
            <View style={style.userCont}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 20,
                  color: "#9494a1",
                }}
              >
                Your Profile
              </Text>
              <View style={style.userAvatar}>
                <Text style={style.avatarText}>
                  {userName?.split(" ")[0][0]}
                  {userName?.split(" ")[1][0]}
                </Text>
              </View>
              <Text>{userName}</Text>
              <Text style={{ fontSize: 14, color: "#9494a1" }}>
                {userEmail}
              </Text>
              {/* log out */}
              <View style={style.logout}>
                <TouchableOpacity onPress={() => dispatch(logoutUser())}>
                  <Text style={{ color: "#9494a1", fontWeight: "bold" }}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={style.loggingContainer}>
              <View style={style.loggingHandel}>
                <SudoBtn altBtn>
                  <TouchableOpacity
                    style={style.btnStyles}
                    onPress={() => navigate("LoginScreen")}
                  >
                    <Text style={{ color: "#222" }}>Login</Text>
                  </TouchableOpacity>
                </SudoBtn>
              </View>
              <View style={style.loggingHandel}>
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
          )}
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

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
  },
  profileWrapper: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#9494a1",
    textAlign: "center",
  },
  logoutWrapper: {
    marginTop: 10,
  },
  profileContainer: {
    marginTop: 50,
    paddingTop: 20,
    height: 400,
    borderStyle: "solid",
    borderColor: "#ddd",
    borderTopWidth: 1,
  },
  userCont: { display: "flex", alignItems: "center" },
  loggingContainer: {
    top: 10,
  },
  userAvatar: {
    height: 200,
    width: 200,
    borderStyle: "solid",
    borderColor: "#9494a1",
    borderWidth: 2,
    marginVertical: 15,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  avatarText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#a463b4",
    textTransform: "uppercase",
  },
  loggingHandel: {
    marginVertical: 5,
  },
  logout: {
    borderStyle: "solid",
    borderColor: "#ddd",
    borderTopWidth: 1,
    top: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
});
