package com.quizzy.backend.repository;

import com.quizzy.backend.model.Quiz;
import com.quizzy.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByCreatorOrderByCreatedAtDesc(User creator);
}
