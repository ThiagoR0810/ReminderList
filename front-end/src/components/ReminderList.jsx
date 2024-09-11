import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ReminderList = ({ reminders, onDelete }) => {
    const [remindersByDate, setRemindersByDate] = useState([])

    const groupRemindersByDate = () => {
        const remindersGrouppedByDate = Object.groupBy(reminders, reminder => reminder.date)
        const remindersGrouppedByDateAsArray = Object.values(remindersGrouppedByDate)

        setRemindersByDate(remindersGrouppedByDateAsArray)
    }

    const formatDate = (dateArray) => {
        return moment(dateArray).subtract(1, 'months').format('DD/MM/YYYY');
    };

    useEffect(groupRemindersByDate, [reminders])

    return (
        <Container>
            <Title>Lista de Lembretes</Title>
            <List>
                {remindersByDate.map((dateReminders, index) => (
                    <DatePanel key={index}>
                        {formatDate(dateReminders[0].date)}

                        {dateReminders.map((reminder, index) =>
                            <ReminderItem key={index}>
                                <span>{reminder.name}</span>
                                <DeleteButton onClick={() => onDelete(reminder.id)}>x</DeleteButton>
                            </ReminderItem>
                        )}
                    </DatePanel>
                ))}
            </List>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const List = styled.div`
    width: 500px;
`;

const DatePanel = styled.div`
    margin-bottom: 50px;
`

const ReminderItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
        background-color: darkred;
    }
`;

export default ReminderList;