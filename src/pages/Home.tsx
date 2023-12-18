import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import axios from 'axios';
import UserCard from '../components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

function Home (){
    const [loading,setLoading] = useState(true);
    const [UserList, setUserList] = useState([]);
    async function FetchData(){
        //const response = await axios.get(URL);
        //setLoading(false);
        //setUserList(response.data);
        axios.get(URL).then(response => {
            setLoading(false);
            setUserList(response.data);
        });
    }

const renderUser = ({item}:{item:any}) => (<UserCard name={item.name} username={item.username} email={item.email}/>)
useEffect(() => {FetchData();}, []);

    return(
        <View>
            {
                loading ? 
                (
                    <ActivityIndicator size={'large'}/>
                ) : 
                (
                    <FlatList data={UserList} renderItem={renderUser}/>
                )
            }
        </View>
    )
}

export default Home;