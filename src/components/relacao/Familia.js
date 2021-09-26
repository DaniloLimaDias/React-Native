import React from 'react'
import { Text } from 'react-native'
import Membro from './Membro'



export default props => {
return (
<>
    <Text>Menbos da Familia </Text>
    {props.children}
</>
)
}