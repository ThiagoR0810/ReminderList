package com.ribeiro.remindersystem;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ribeiro.remindersystem.model.Reminder;
import com.ribeiro.remindersystem.service.ReminderService;

@SpringBootTest
public class ReminderServiceTest {

    @Autowired
    private ReminderService reminderService;

    @Test
    public void testAdicionarLembrete() {
        Reminder reminder = new Reminder("Estudar Spring", LocalDate.now().plusDays(2));
        Reminder saved = reminderService.addReminder(reminder);
        assertNotNull(saved);
        assertEquals("Estudar Spring", saved.getNome());
    }
}
