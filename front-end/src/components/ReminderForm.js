import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ReminderForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !date.trim()) {
            alert('Nome e data são obrigatórios');
            return;
        }

        const currentDate = moment().startOf('day');
        const selectedDate = moment(date, 'YYYY-MM-DD');
        
        if (selectedDate.diff(currentDate, 'days') <= 0) {
            alert('A data deve ser no futuro');
            return;
        }
        onAdd({ name, date });
        setName('');
        setDate('');
    };

    return (
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome do lembrete"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <Button type="submit">Criar</Button>
            </FormContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 15px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 15px;

    &:hover {
        background-color: #0056b3;
    }
`;

export default ReminderForm;
