import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Input.style';

function Input({label,placeholder,onChangeText} : {label:string,placeholder:string,onChangeText:any}){
    return(
        <View style={styles.container}>
            <Text style= {styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
        </View>
    )
}
export default Input;