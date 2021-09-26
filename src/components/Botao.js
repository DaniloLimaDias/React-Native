import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn('Exec #01')
    }

    return (
        <>
        <Button 
            title="Excutar #01!"
            onPress={executar}
        />
        <Button 
            title="Excutar #02!"
            onPress = {function(){
                console.warn("exerc #2")
            }}
        />
        <Button 
            title="Excutar #03!"
            onPress = {() => {
                console.warn("exerc #3")
            }}
        />
        </>
    )
}