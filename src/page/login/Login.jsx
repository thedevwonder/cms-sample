import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../../auth.firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
    <div style={{margin: "3rem", textAlign:"center"}}>
        <div>
        Sign In Anonymously
        </div>
    
      <Button variant="dark" style={{marginTop: "2rem"}} onClick={signInUser}>Sign In</Button>
    </div>
  );
};

export default Login;
