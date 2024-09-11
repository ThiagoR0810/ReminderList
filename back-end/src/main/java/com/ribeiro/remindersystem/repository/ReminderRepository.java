package com.ribeiro.remindersystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ribeiro.remindersystem.model.Reminder;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {
}
