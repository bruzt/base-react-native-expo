import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import { setMessage as clearMessage } from '../../redux/actions/messageActions';

export default function AlertMessage(){

    const message = useSelector( (state) => state.message);
    const dispatch = useDispatch();

    function alert(){
        
        if(message.text.trim()){

            Alert.alert(message.title || 'Mensagem', message.text);

            dispatch(clearMessage({ title: '', text: '' }));
        }
    }

    return (
        <React.Fragment>
            {alert()}
        </React.Fragment>
    );
}