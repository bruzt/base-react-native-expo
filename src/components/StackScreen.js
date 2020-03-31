import React from 'react';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';

export default function StackScreen(){

    const route = useRoute();
    
    return (
        <Container>

            <Text>
                Stack Screen
                {'\n' + route.params.data}
            </Text>

        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`

`;