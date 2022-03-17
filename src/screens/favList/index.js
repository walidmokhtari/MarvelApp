import React, {useContext} from 'react';
import {Text, FlatList} from 'react-native';
import AuthContext from '../../configs/context';
import Card from '../../components/card';


function FavList(props) {
    const { favoriteList } = useContext(AuthContext);
    return (
        <>
            <FlatList
                data={favoriteList}
                renderItem={({item}) => (<Card charachter={item} />)}
                keyExtractor={(item) => item.name}
                numColumns={2}
                marginTop={20}
            />
        </>
    );
}

export default FavList;