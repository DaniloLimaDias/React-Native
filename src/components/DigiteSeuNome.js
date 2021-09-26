import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Estilo from "./estilo";

export default (props) => {
  const [nome, setNome] = useState("teste");

  return (
    <View style={Estilo.textG}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
};
