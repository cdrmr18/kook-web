import React from "react";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import SignInForm from "../../components/signInForm/signInForm.component";
import { SignInContainer } from "./signIn.style";

const SignIn = () => {
  return (
    <SignInContainer>
      <div>
        <SignInForm />
      </div>

      <div>
        <SignUpForm />
      </div>
    </SignInContainer>
  );
};

export default SignIn;
