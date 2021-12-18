import React from 'react'
import styled from 'styled-components';
import { centerIt, mainColor } from '../globalStyle';

const Title = styled.h2`
color: ${mainColor};
margin: 20px 0;
width: 80%;
justify-self: start;
`
const TitleNoTask = styled.h2`
color: ${mainColor};
margin: 20px 0;
width: 80%;
${centerIt};
`

const UL = styled.ul`
width: 80%;
list-style: none;
`;

const ListContainer = styled.div`
display: flex;
width: 100%;
display:flex;
height: 40px;
background-color: #fdebee;
border-radius: 10px;
margin-bottom: 20px;
`

const ReminderTag = styled.div`
height: 100%;
width: 5px;
background-color: orange;
opacity: ${props => props.opacity }
`

const LI = styled.li`
flex: 11;
padding-left: 20px;
font-size: 16px;
font-weight: 300;
display: flex;
align-items: center;
`;
const Delete = styled.button`
flex: 1;
height: 100%;
${centerIt};
cursor: pointer;
background: none;
border:none;
font-size: 16px;
font-weight: 800;
color: ${mainColor};
padding-right: 20px;
`



const ListTask = ({datas, onDeleteList, onReminderToggle}) => {

    const reminderToggle = (id) => {
        onReminderToggle(id)
    }
    

    return (
        <>
        {datas.length < 1 && <TitleNoTask>You have no tasks</TitleNoTask>}
        {datas.length >= 1 && (
            <>
            <Title>Your Tasks:</Title>
            <UL>
                {datas.map( data => (
                    <ListContainer 
                    key={data.id} 
                    onDoubleClick={() => reminderToggle(data.id)}
                    >
                        <ReminderTag opacity={data.reminder === true ? '1' : '0'} />
                        <LI>{data.task}</LI>
                        <Delete onClick={() => onDeleteList(data.id)}>x</Delete>
                    </ListContainer>
            
                ))}
            </UL>
            </> 
            ) 
        }
        </>
    )
}

export default ListTask
