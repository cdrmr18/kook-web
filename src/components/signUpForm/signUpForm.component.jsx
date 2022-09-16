import React, { useState } from "react";
import { FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";
import { StyledFormControl } from "./signUpForm.style";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("user creation error", error);
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
        <h2>Sign Up</h2>

        <FormLabel>Display name</FormLabel>
        <Input
          id="displayName"
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
        />

        <FormLabel>Email address</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
        />

        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
        />

        <FormLabel>Confirm password</FormLabel>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
        <FormHelperText>We'll never share your email.</FormHelperText>
      </StyledFormControl>
    </form>
  );
};

export default SignUpForm;
