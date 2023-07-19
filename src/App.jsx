import { useState } from "react";
import "./App.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { redirect } from "react-router-dom";
import auth from "./auth.firebase";


function App() {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      return redirect(`/login`)
    }
  });

  const signOutUser = () => {
    signOut(auth).then(function(){
      console.log('Signed Out')
      return redirect(`/login`)
    }).catch((error) => {
      console.log('Signed Out');
    })
  }

  return (
    <div>
     My Dashboard
     <br/>
     <button onClick={signOutUser}>Sign Out</button>
    </div>
  );
}

export default App;
