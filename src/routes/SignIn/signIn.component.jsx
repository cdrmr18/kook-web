import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebaseUtils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Google Sign in</button>
    </div>
  );
};

export default SignIn;
