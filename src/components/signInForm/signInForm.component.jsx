import React, { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebaseUtils";
import { UserContext } from "../../context/user.context";
import { FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react";
import { StyledFormControl } from "./signInForm.style";

const defaultFields = {
  signInEmail: "",
  signInPassword: "",
};

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFields);
  const { signInEmail, signInPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(
        signInEmail,
        signInPassword
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password entered.");
          break;
        case "auth/user-not-found":
          alert("Wrong email entered.");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormControl isRequired>
        <h2>Sign In</h2>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          id="signInEmail"
          name="signInEmail"
          onChange={handleChange}
          value={signInEmail}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          id="signInPassword"
          name="signInPassword"
          onChange={handleChange}
          value={signInPassword}
        />
        <Button mt={4} colorScheme="teal" type="submit">
          Sign in
        </Button>
        <Button
          type="button"
          mt={4}
          colorScheme="blue"
          onClick={signInWithGoogle}
        >
          Google Sign in
        </Button>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </StyledFormControl>
    </form>
  );
};

export default SignInForm;
