import ReactDOM from 'react-dom'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';
import Button from './Button';
import Card from './Card';

const OverlayContainer = styled.div`
height: 100vh;
width: 100vw;
background: rgba(0, 0, 0, 0.7);
position: fixed;
top: 0;
left: 0;
z-index: 6;
`

const Overlay = () => {
    return (
        <OverlayContainer />
    )
}

const ModalContainer = styled.div`
height: 100vh;
width: 100vw;
background: rgba(0, 0, 0, 0.7);
position: fixed;
top: 0;
left: 0;
z-index: 7;
${centerIt};
`

const Title = styled.h2`
color: purple;
margin: 15px 0;
`

const Message = styled.p`
font-size: 18px;
margin: 10px 0;
`

const Modal = ({title,message,onCloseError}) => {
    return (
        <ModalContainer onClick={onCloseError}>
            <Card>
            <Title>{title}</Title>
            <Message>{message}</Message>
            <Button onClick={onCloseError}>Okay</Button>
            </Card>
        </ModalContainer>
    )
}

export const ErrorModal = ({title, message, onCloseError}) => {
    return (
        <>
        { ReactDOM.createPortal(
            <Overlay />,
            document.getElementById('overlay-root')
        )}
        {ReactDOM.createPortal(
            <Modal title={title} message={message} onCloseError={onCloseError}/>,
            document.getElementById('modal-root')
        )}
        </>
    )
}