import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../../auth.firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser]);
  const navigate = useNavigate();
  const signInUser = () => {
    signInAnonymously(auth)
      .then(() => {
        navigate("/");
        console.log("sign in successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, "sign in failed");
      });
  };
  return (
    <>
      <button onClick={signInUser}>Sign In</button>
    </>
  );
};

export default Login;
