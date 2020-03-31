import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;


export default function Third(){

    const navigation = useNavigation();
    
    return (
        <Container>

            <StackMenuButton onPress={() => navigation.navigate('StackScreen', { data: 'dados da rota' })}>
                <Text>Stack menu</Text>
            </StackMenuButton>

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: ${deviceWidth}px;
`;

const StackMenuButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: #232ccf;
`;

const Text = styled.Text`
    color: white;
`;