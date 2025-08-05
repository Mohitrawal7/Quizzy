package com.quizzy.backend.service.quiz;



import com.quizzy.backend.dto.quiz.QuizResponse;
import com.quizzy.backend.model.User;
import com.quizzy.backend.repository.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<QuizResponse> getQuizzesForUser(User user) {
        return quizRepository.findByCreatorOrderByCreatedAtDesc(user)
                .stream()
                .map(quiz -> new QuizResponse(
                        quiz.getId(),
                        quiz.getTopic(),
                        quiz.getJoinCode(),
                        quiz.getQuestions().size(),
                        quiz.getCreatedAt()
                ))
                .collect(Collectors.toList());
    }
}