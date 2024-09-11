package com.ribeiro.remindersystem.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ribeiro.remindersystem.model.Reminder;
import com.ribeiro.remindersystem.service.ReminderService;

import java.util.List;

@RestController
@RequestMapping("/reminder")
@CrossOrigin(origins = "*")
public class ReminderController {

	@Autowired
    private ReminderService reminderService;

    @PostMapping
    public ResponseEntity<Reminder> addReminder(@Valid @RequestBody Reminder reminder) {
        Reminder newReminder = reminderService.addReminder(reminder);
        return ResponseEntity.status(HttpStatus.CREATED).body(newReminder);
    }

    @GetMapping
    public ResponseEntity<List<Reminder>> listReminders() {
        return ResponseEntity.ok(reminderService.listReminders());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReminder(@PathVariable Long id) {
        reminderService.deleteReminder(id);
        return ResponseEntity.noContent().build();
    }
}
