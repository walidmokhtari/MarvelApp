import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import services from '../../configs/services/services';
import AuthContext from '../../configs/context';


const Form = (props) => {
    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const { setLogged } = useContext(AuthContext);

    const handleSubmit = async () => {
        const res = await services.login(user);
        
        if(res.headers["x-access-token"]) {
            await AsyncStorage.setItem("token",res.headers["x-access-token"]);
            setLogged();
        } else {
            alert("Invalid username or password");
        }
    }
    
    return (
        <>  
            <TextInput onChangeText={text => setUser({...user, username: text})} email placeholder="Username" />
            <TextInput onChangeText={text => setUser({...user, password: text})} placeholder="Password" secureTextEntry={true} />
            <Button title='Login' value="Login" onPress={handleSubmit}><TextLogin>Login</TextLogin></Button>
        </>
    );
}

const styles = StyleSheet.create({
    
    userIcon: {
      fontSize: 20,
      color: "black"
    }
  });

const TextInput = styled.TextInput`
  background-color: #dfe6e9;
  margin-top: 20px;
  border-radius: 5px;
`;

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color:  #d63031;
    margin-top: 20px;
    border-radius: 5px;
    justify-content: center;

`

const TextLogin = styled.Text`
    color: white;
    text-align: center;
    font-size: 18px;
`


export default Form;