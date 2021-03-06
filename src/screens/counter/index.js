import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '~/components/button';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Counter = ( {title, initValue} ) => {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <TitleContainer>
                <TitleLabel>{title}</TitleLabel>
            </TitleContainer>
            <CountContainer>
                <CountLabel>{ initValue + count }</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="plus" onPress={ ()=> setCount(count+1)} />
                <Button iconName="minus" onPress={ ()=> setCount(count-1)} />
            </ButtonContainer>
        </Container>
    );
};

export default Counter