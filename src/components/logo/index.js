import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

const Logo = (props) => {
    return (
        <View>
            <Image 
                source={{uri: "https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-4.png"}} 
            ></Image>
        </View>
    );
}

const View = styled.View`
    justify-content: center;
`;

const Image = styled.Image`
    width: 120px;
    height: 50px;
    margin-left: 110px;
`;



export default Logo;