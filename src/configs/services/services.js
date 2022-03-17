import axios from "axios";
import md5 from 'md5';

export default {
     login(user) {
        try {
            const res =  axios.post("https://easy-login-api.herokuapp.com/users/login", user);
            return res;
        } catch (err){
            console.log(err)
        }
    },

    async getCharachters(offset) {
        var public_key = "ea47988c34aa5bfef6a28203b5a68a03";
        var private_key = "dd1e3e121f7f823137a4087c5bd95bfe3432289e";
        var ts = Date.now();

        var hash = md5(ts+private_key+public_key);
        try {
            //back-côtes
            const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=${20}&offset=${offset}&ts=${ts}&apikey=${public_key}&hash=${hash}`);
            return res;
        } catch (err){
            console.log(err);
        }
    },

    async getCharachter(id) {
        var public_key = "ea47988c34aa5bfef6a28203b5a68a03";
        var private_key = "dd1e3e121f7f823137a4087c5bd95bfe3432289e";
        var ts = Date.now();

        var hash = md5(ts+private_key+public_key);
        try {
            const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${public_key}&hash=${hash}`);
            return res;
        } catch (err){
            console.log(err);
        }
    },
}