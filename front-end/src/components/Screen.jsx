import React, { useState, useLayoutEffect } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import styled from 'styled-components';
import ReminderRequests from '../api/ReminderRequests';

function Screen() {

    const [reminders, setReminders] = useState([]);

    useLayoutEffect(() => {
        fetchData()
    }, []);

    async function fetchData() {
        const reminders = await ReminderRequests.getReminders()

        setReminders(reminders)
    }

    const addReminder = async (reminder) => {
        await ReminderRequests.addReminder(reminder)

        fetchData()
    };

    const deleteReminder =  async (id) => {
        await ReminderRequests.deleteReminder(id)

        fetchData()
    };

    return (
        <ScreenContainer>
            <h1>Sistema de Lembretes</h1>
            <ReminderForm onAdd={addReminder} />
            <ReminderList reminders={reminders} onDelete={deleteReminder} />
        </ScreenContainer>
    );
}

const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export default Screen;
