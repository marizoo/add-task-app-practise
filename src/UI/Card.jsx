import React from 'react'
import styled from 'styled-components';
import {columnIt} from '../globalStyle'

const Container = styled.div`
width: 500px;
background-color: white;
border-radius: 10px;
margin: 30px;
${columnIt};
justify-content: center;
align-items: center;
`;


const Card = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}



export default Card
