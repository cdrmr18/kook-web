import React, { useState } from "react";
import { FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <StyledFormControl
      onSubmit={() => {
        console.log("submitted");
      }}
    >
      <h2>Sign Up</h2>
      <FormLabel>Display name</FormLabel>
      <Input
        name="displayName"
        type="text"
        onChange={handleChange}
        value={displayName}
      />
      <FormLabel>Email address</FormLabel>
      <Input name="email" type="email" onChange={handleChange} value={email} />
      <FormLabel>Password</FormLabel>
      <Input
        name="password"
        type="password"
        onChange={handleChange}
        value={password}
      />
      <FormLabel>Confirm password</FormLabel>
      <Input
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
  );
};

export default SignUpForm;
