import React from "react";
import { view, Text, View} from 'react-native'
import Estilo from './estilo'

export default props => {
    return ( 
        <>
            <Text style={Estilo.textG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </>
    )
    }