import React, {useState, useEffect, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import styled from 'styled-components';
import services from '../../configs/services/services';
import Card from '../../components/card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../../configs/context';
import IconAnt from 'react-native-vector-icons/AntDesign';


function Charachters(props) {
    const [charachters, setCharachters] = useState([]);
    const [offset, setOffset] = useState(0);
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();

    const getChar = async () => {
        const char = await services.getCharachters(offset);
        setCharachters([...charachters,...char.data.data.results]);
    }

    useEffect(() => {
      getChar();
    }, [offset])

   
    return (
        <SafeAreaView style={{paddingBottom: 100}}>
            <View style={styles.view}>
                <Button title='Fav' onPress={() => navigation.navigate('Favorite List')}><IconAnt name="heart" size={20}  color="white">  FAV LIST</IconAnt></Button>
                <Button title='Logout' onPress={logout}><IconAnt name="logout" size={20}  color="white">  LOGOUT</IconAnt></Button>
             </View>
            {
                charachters ? (
                    <FlatList
                        data={charachters}
                        renderItem={({item}) => (<Card charachter={item} />)}
                        keyExtractor={(item) => item.name}
                        numColumns={2}
                        onEndReached={() => setOffset(offset + 20)}
                        marginTop={20}
                    />
                    ) 
                : 
                    null
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

const Button = styled.TouchableOpacity`
    width: 140px;
    height: 40px;
    background-color:  #d63031;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;

`

const TextHome = styled.Text`
    color: white;
    text-align: center;
    font-size: 20px;
`

const TextCharachters = styled.Text`
    color: black;
    text-align: center;
    font-size: 18px;
`


export default Charachters;