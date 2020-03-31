import React from 'react';
import styled from 'styled-components/native';

import First from './First';
import Second from './Second';
import Third from './Third';

export default function Home(){
   
    return (
        <Container>
            <MainScroll
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >

                <First />

                <Second />

                <Third />

            </MainScroll>
        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`;

const MainScroll = styled.ScrollView`

`;