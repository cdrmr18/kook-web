import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";
import { FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react";
import { StyledFormControl } from "./signInForm.style";

const SignInForm = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <StyledFormControl>
      <h2>Sign In</h2>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormLabel>Password</FormLabel>
      <Input type="password" />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
      <Button mt={4} colorScheme="blue" onClick={logGoogleUser}>
        Google Sign in
      </Button>
      <FormHelperText>We'll never share your email.</FormHelperText>
    </StyledFormControl>
  );
};

export default SignInForm;
