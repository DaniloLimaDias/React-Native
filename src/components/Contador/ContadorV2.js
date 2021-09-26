import React, { useState } from "react";
import { Text } from "react-native";
import Estilo from "../estilo";

import ContadorDisplay from "./ContadorDisplay";
import ContadorButoes from "./ContadorButoes";

export default (props) => {
  const [num, setNum] = useState(0);
  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);
  return (
    <>
      <Text style={Estilo.textG}>Contador v2</Text>
      <ContadorDisplay num={num} />
      <ContadorButoes inc={inc} dec={dec}/>
    </>
  );
};
