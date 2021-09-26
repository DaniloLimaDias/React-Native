import React from "react";
import { Button, Text } from "react-native";
import Estilo from "../estilo";

export default (props) => {
  return (
      <>
        <Button title="+" onPress={props.inc}/>
        <Button title="-" onPress={props.dec}/>
      </>
  );
};
