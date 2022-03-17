import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components';


const Card = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {
            id: props.charachter.id
        })}>
            <View >
                <Image 
                    source={{uri: `${props.charachter.thumbnail.path}.${props.charachter.thumbnail.extension}`}} 
                ></Image>
                <TextName>{props.charachter.name}</TextName>
                <TextAuthor>{props.charachter.modified}</TextAuthor>
            </View>
        </TouchableOpacity>
    );
}

const TouchableOpacity = styled.TouchableOpacity`
   width: 40%;
   height: 200px;
   align-items: center;
   justify-content: center;
   margin-left: 27px;
   margin-bottom: 10px;
   padding: 20px;
   border-bottom-right-radius: 30px;
   background-color: #d63031;
`

const View = styled.View`
   width: 80%;
   height: 200px;
   margin-top: 20px;
`

const Image = styled.Image`
    width: 100%;
    height: 100px;
    border-radius: 5px;
`;

const TextName = styled.Text`
    color: black;
    font-size: 16px;
    text-align: center;
`

const TextAuthor = styled.Text`
    color: #b2bec3;
    font-size: 12px;
    text-align: center;
`



export default Card;