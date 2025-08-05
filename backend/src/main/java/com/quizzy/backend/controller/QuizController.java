package com.quizzy.backend.controller;


import com.quizzy.backend.model.User;
import com.quizzy.backend.service.quiz.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/my-quizzes")
    public ResponseEntity<List<com.quizzy.backend.dto.quiz.QuizResponse>> getMyQuizzes(@AuthenticationPrincipal User user) {
        // @AuthenticationPrincipal magically injects the currently logged-in User object
        // This is possible because you built a proper login system!
        List<com.quizzy.backend.dto.quiz.QuizResponse> quizzes = quizService.getQuizzesForUser(user);
        return ResponseEntity.ok(quizzes);
    }
}