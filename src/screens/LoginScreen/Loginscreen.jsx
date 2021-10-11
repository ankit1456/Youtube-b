import React, { useEffect } from "react";
import "./_login.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);
  return (
    <div className='login'>
      <div className='login__container'>
        <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
        <h1>U Tube : Try Something New</h1>
        <button onClick={handleLogin}>Login With Google</button>
      </div>
    </div>
  );
};

export default LoginScreen;
