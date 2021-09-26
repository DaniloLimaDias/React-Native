import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Mega from './components/mega/Mega';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ContadorV2 from './components/Contador/ContadorV2';
// import Pai from  './components/indireta/Pai'
// import Contador from './components/Contador'
// import Boato from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/aleatorio'
// import MinMax from './components/MinMax'
// import Primerio from './components/Primerio';
// import { Comp1, Comp2 } from './components/Multi'


function App() {
  return (
        <SafeAreaView style={style.App}>
          <Mega/>
          {/* <DigiteSeuNome/> */}
          {/* <ListaProdutos/> */}
          {/* <ListaProdutosV2/> */}
          {/* <ContadorV2/> */}
        {/* <Contador inicial={0} /> */}
        {/* <Familia>
          <Membro nome="Bia" sobrenome="lima"></Membro>
          <Membro nome="Danilo" sobrenome="lima"></Membro>
        </Familia>
        <Familia>
          <Membro nome="Julia" sobrenome="silva"></Membro>
          <Membro nome="ana" sobrenome="silva"></Membro>
          <Membro nome="paulo" sobrenome="silva"></Membro>
          <Membro nome="pedro" sobrenome="silva"></Membro>
        </Familia> */}
        {/* <Boato/> */}
          {/* <Titulo principal="Cadastro" segundario="Tela de cadastro"></Titulo> */}
          {/* <Aleatorio num1={10} num2={1} /> */}
          {/* <MinMax min={2} max={22} />
          <MinMax min="1" max="94" /> */}
      {/* <Text>danilooooooooooooooooo!</Text>
      <View><Primerio /></View>
      <Comp1>ola</Comp1>
      <Comp2>asasasas</Comp2>
      <StatusBar style="auto" /> */}
        </SafeAreaView>
  );
}

const  style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
       
    }
})

export default App