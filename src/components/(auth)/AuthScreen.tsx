import { View, Text } from "react-native";
import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

type Props = {};

const AuthScreen = (props: Props) => {
  const [login, setLogin] = useState(true);
  const Toggle = () => {
    setLogin((prev) => !prev);
  };
  return (
    <>
      {login ? (
        <LoginScreen toggle={Toggle} />
      ) : (
        <SignupScreen toggle={Toggle} />
      )}
    </>
  );
};

export default AuthScreen;
