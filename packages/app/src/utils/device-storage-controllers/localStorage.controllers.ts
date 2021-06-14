// import pkgs:
import AsyncStorage from "@react-native-async-storage/async-storage";

// set certain value n local device storage:
export const setLocalDataAsObj = async (
  dataKey: string,
  targetToStore: object | string | []
) => {
  try {
    const authedUser: string = JSON.stringify(targetToStore);

    await AsyncStorage.setItem(dataKey, authedUser);
  } catch (e) {
    console.log(e.message);
  }
};

// get the object from the device local storage:
export const getLocalDataAsObj = (dataKey: string) => {
  try {
    // extract the local value:
    const data = AsyncStorage.getItem(dataKey);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const removeLocalData = async (dataKey: string) => {
  try {
    await AsyncStorage.removeItem(dataKey);
  } catch (e) {
    console.log(e);
  }
};

// removeLocalData("currentAuthedUser");
