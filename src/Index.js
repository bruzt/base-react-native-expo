import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { Alert } from 'react-native';
import { SplashScreen, Updates } from 'expo';

import store from './redux/store';

import Routes from './Routes';
import AlertMessage from './components/common/AlertMessage';

export default function App(){

    SplashScreen.preventAutoHide();

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect( () => {

        getFonts();
        
    }, []);


    async function getFonts(){

        try {
    
            await Font.loadAsync({ 
    
                //'shelter': require('../assets/fonts/shelter.otf')
            });
    
            setFontsLoaded(true);
            SplashScreen.hide();
            
        } catch (error) {
            Alert.alert("Erro", "Erro ao abrir o App");
            await Updates.reload();
        }
    }
    

    return (
        <React.Fragment>

            {(fontsLoaded) && (

                <Provider store={store}>

                    <AlertMessage />

                    <Routes />

                </Provider>

            )}

        </React.Fragment>
    );
}