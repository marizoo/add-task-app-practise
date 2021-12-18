import React, { useState } from 'react'
import styled from 'styled-components';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { centerIt } from './globalStyle';
import Button from './UI/Button';
import Card from './UI/Card';

const MainContainer = styled.div`
height: 100vh;
width: 100vw;
background: #1d1d1d;
${centerIt};
`;



const App = () => {
  const [showList, setShowList] = useState([])
  const [showForm, setShowForm] = useState(false)

  const showAddedList = (newTasks) => {
    setShowList(prevList => {
      return [newTasks, ...prevList]
    })
  }

  const toggleShowForm = () => {
    setShowForm(!showForm)
  }

  const deleteList = (clickedID) => {
    setShowList(showList.filter( list => list.id !== clickedID ))
  }

  const toggleReminder = (id) => {
    setShowList(
      showList.map( list => list.id === id 
      ? {...list, reminder: !list.reminder}
      : list
     ))
  } 

  

  return (
    <MainContainer>
        <Card>
          {!showForm && (
            <Button onClick={toggleShowForm}>Add Tasks</Button>
          )}
          {showForm && (
            <AddTask 
            onNewTasks={showAddedList} 
            onCloseForm={toggleShowForm} 
            
            />
          )}
          <ListTask datas={showList} onDeleteList={deleteList} onReminderToggle={toggleReminder}/>
        </Card>
    </MainContainer>
  )
}


export default App
