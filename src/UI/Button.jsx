import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';

const Container = styled.button`
${centerIt};
padding: 12px;
background-color: ${props => props.bg};
color: white;
margin: 15px;
cursor: pointer;
border-radius: 10px;
font-size: 14px;
font-weight: 500;
`;


const Button = (props) => {
    return (
        <Container bg={props.bg || 'purple'} onClick={props.onClick} type={props.type || 'button'}>
            {props.children}
        </Container>
    )
}

export default Button
