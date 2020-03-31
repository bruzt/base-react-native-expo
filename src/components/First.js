import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default function First(){

    return (
        <Container>

            <Text>First page</Text>

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: ${deviceWidth}px;
`;

const Text = styled.Text`

`;