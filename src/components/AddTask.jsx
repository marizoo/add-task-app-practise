import React, {useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';
import Button from '../UI/Button';
import { ErrorModal } from '../UI/ErrorModal';

const Form = styled.form`
width: 80%;
${columnIt}
align-items: center;
margin: 50px 0;
`;

const Input = styled.input`
height: 40px;
width: 100%;
padding-left: 20px;
margin-bottom: 15px;
font-size: 16px;
font-weight: 300px;
border-radius: 10px;
background: none;
border: 1px solid rgba(0, 0, 0, 0.7);

&:focus{
    outline: none;
}
`
const CheckboxContainer = styled.div`
width; 100%;
height: 40px;
${centerIt};
`
const Label = styled.label`
font-size: 16px;
margin-right: 10px;
`

const InputCheckbox = styled.input`
width: 20px;
height: 20px;
`

const ButtonContainer = styled.div`
${centerIt};
width: 100%;

`


const AddTask = ({onNewTasks, onCloseForm}) => {

    const [addTask, setAddTask] = useState("")
    const [addReminder, setAddReminder] = useState(false)
    const [errors, setErrors] = useState()

    const addTaskHandler = (ev) => {
        setAddTask(ev.target.value)
    }

    const addReminderHandler = (ev) => {
        setAddReminder(ev.currentTarget.checked)
    }

    const submitHandler = (ev) => {
        ev.preventDefault()

        if (addTask.trim().length === 0 ) {
            setErrors({
                title: 'Oops...',
                message: 'Invalid input darling.'
            })
            return;
        }

        const newTasks = {
            task : addTask,
            id: Math.floor(Math.random() * 10000),
            reminder : addReminder
        }

        onNewTasks(newTasks);
        setAddTask("");
        setAddReminder(false);
    }

    const closeErrorModal = () => {
        setErrors(null)
    }

    return (
        <>
        {errors && (
            <ErrorModal
            title={errors.title}
            message={errors.message}
            onCloseError={closeErrorModal}
            />
        )}

        <Form onSubmit={submitHandler}>
            <Input 
            name="addTask"
            type="text"
            placeholder="Add Task"
            value={addTask}
            onChange={addTaskHandler}
            />
            <CheckboxContainer>
                <Label htmlFor='addReminder'>Set Reminder:</Label>
                <InputCheckbox 
                id='addReminder' 
                type="checkbox"
                value={addReminder}
                checked={addReminder}
                onChange={addReminderHandler}
                />
            </CheckboxContainer>
            <ButtonContainer>
            <Button type="submit">Add Task</Button>
            <Button onClick={onCloseForm} bg='black'>Cancel</Button>
            </ButtonContainer>
        </Form>
        </>
    )
}

export default AddTask
