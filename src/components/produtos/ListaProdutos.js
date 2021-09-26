import React from "react";
import { Text, View } from "react-native";
import Estilo from "../estilo";

import Produtos from "./Produtos";

export default (props) => {
  return (
    <>
      <Text style={Estilo.textG}>Lista de produtos</Text>
      {Produtos.map(p => { 
          return <Text key={p.id} >{p.id}</Text>;
      })}
    </>
  );
};
