import axios from "axios"
import React, { useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AuthContext = createContext({
    isLogged: false,
    favoriteList: [],
    setLogged: () => {},
    logout: () => {},
    addHeroToFavoriteList: () => {}
})

export const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [favoriteList, setFavoriteList] = useState([]);

    const verifyToken = async () => {
        const token = await AsyncStorage.getItem("token")
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }

    const setLogged = () => {
        setIsLogged(true);
    }

    const logout = async () => {
        await AsyncStorage.clear();
        setIsLogged(false)
    }

    const addHeroToFavoriteList = (hero) => {
        setFavoriteList([...favoriteList, hero]);
        alert("Votre hero a bien été ajouté a la favorite list");
    }

    

    useEffect(()=> {
        verifyToken();
    }, []) 

    const context = {
        isLogged,
        favoriteList,
        setLogged,
        logout,
        addHeroToFavoriteList,
    }
    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export default AuthContext