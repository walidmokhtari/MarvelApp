import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import services from '../../configs/services/services';
import IconAnt from 'react-native-vector-icons/AntDesign';
import AuthContext from '../../configs/context';


const Details = (props) => {
    const {navigation} = props;
    const [charachter, setCharachter] = useState({});
    const [isInFavList, setIsInFavList] = useState(false);
    const { addHeroToFavoriteList, favoriteList} = useContext(AuthContext);
    console.log(charachter.id);

    const checkFavList =  () => {
        favoriteList.map((item) => {
            if (item.id == charachter.id){
                setIsInFavList(true);   
            }

        })
    }   

    const getCharById = async () => {
        const char = await services.getCharachter(props.route.params.id);
        setCharachter(char.data.data.results[0]);
    }


    useEffect(() => {
        getCharById();
        checkFavList();
    },[charachter])

    return (
        <>
            <Image 
                source={{uri: `${charachter.thumbnail?.path}.${charachter.thumbnail?.extension}`}} 
            ></Image>
            <Text>ID : {charachter.id}</Text>
            <Text>Name : {charachter.name}</Text>
            <Text>Modified : {charachter.modified}</Text>
            <Text>Author : {charachter.events?.items[0]?.name || 'N/A'}</Text>
            {
                isInFavList ? 
                    <Button title='delete'><IconAnt style={styles.hearto} name="delete"></IconAnt><TextHome>Delete from favorite list</TextHome></Button>
                :
                    <Button title='heart' onPress={() => addHeroToFavoriteList(charachter)}><IconAnt style={styles.hearto} name="heart"></IconAnt><TextHome>Add to favorite list</TextHome></Button>
            }
            
            
        </>
    );
}

const styles = StyleSheet.create({
    hearto: {
        color: '#d63031',
        fontSize: 25
    }

});

const Image = styled.Image`
    width: 100%;
    height: 400px;
`;

const Text = styled.Text`
    color: black;
    font-size: 16px;
    margin-left: 10px;
`

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border: solid 1px #d63031;
    margin-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const TextHome = styled.Text`
    color: #d63031;
    text-align: center;
    font-size: 18px;
    margin-left: 10px;
`

export default Details;