package com.quizzy.backend.dto.quiz;


import java.time.LocalDateTime;

public class QuizResponse {
    private Long id;
    private String topic;
    private String joinCode;
    private int numberOfQuestions;
    private LocalDateTime createdAt;

    public QuizResponse(Long id, String topic, String joinCode, int numberOfQuestions, LocalDateTime createdAt) {
        this.id = id;
        this.topic = topic;
        this.joinCode = joinCode;
        this.numberOfQuestions = numberOfQuestions;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getJoinCode() {
        return joinCode;
    }

    public void setJoinCode(String joinCode) {
        this.joinCode = joinCode;
    }

    public int getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(int numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}