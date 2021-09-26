import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default (props) => {
    const numeroAleatorio = Math.floor(Math.random() * props.num1 + props.num2)
    return(
        <Text style={Estilo.textG}>{numeroAleatorio}</Text>
    )
}