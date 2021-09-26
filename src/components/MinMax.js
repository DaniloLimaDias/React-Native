import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default (props) => {
    return (
        <Text style={Estilo.textG}>O VVvalor {props.max} é maior o que o valor{props.min}</Text>
    )
}