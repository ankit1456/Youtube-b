import firebase from "firebase/app";
import { auth } from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    // provider.addScope("https://www.googleapis.com/auth/youtube.readonly");

    const result = await auth.signInWithPopup(provider);

    const accessToken = result.credential.accessToken;
    const profile = {
      name: result.user.displayName,
      photoUrl:
        result.user.photoURL || result.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("yt-access-token", accessToken);
    sessionStorage.setItem("yt-profile", JSON.stringify(profile));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: LOG_OUT,
  });

  sessionStorage.removeItem("yt-access-token");
  sessionStorage.removeItem("yt-profile");
};
