package com.ribeiro.remindersystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import com.ribeiro.remindersystem.model.Reminder;
import com.ribeiro.remindersystem.repository.ReminderRepository;

import java.util.List;

@Service
public class ReminderService {

	@Autowired
    private ReminderRepository reminderRepository;

    public Reminder addReminder(Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    public List<Reminder> listReminders() {
        return reminderRepository.findAll(Sort.by(Sort.Direction.ASC, "date"));
    }

    public void deleteReminder(Long id) {
        reminderRepository.deleteById(id);
    }
}
