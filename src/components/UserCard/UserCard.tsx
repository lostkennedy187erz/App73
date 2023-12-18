import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const UserCard = (props: {name:undefined,username:undefined,email:undefined}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.username}>
                {props.username}
            </Text>
            <Text style={styles.text}>
                {props.name}
            </Text>
            <Text style={styles.email}>
                {props.email}
            </Text>
        </View>
    )
}
export default UserCard;

const styles = StyleSheet.create({
    container:{
        marginVertical:15,
        padding:5,
    },
    text:{
        color:'black',
    },
    email:{
        fontStyle:'italic',
        color:'gray',
    },
    username:{
        fontWeight:'bold',
    }
})