import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import Logo from '../../components/logo/index.js';
import Form from '../../components/form/index.js';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Logo></Logo>
            <Form></Form>
        </View>
    );
}

const View = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 100px;
`;


export default Login;