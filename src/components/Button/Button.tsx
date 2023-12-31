import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress} : {text: string,onPress:any}) => {
    return(
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default Button;