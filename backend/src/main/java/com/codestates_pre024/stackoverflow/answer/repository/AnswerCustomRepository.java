package com.codestates_pre024.stackoverflow.answer.repository;

import com.codestates_pre024.stackoverflow.answer.entity.Answer;
import com.codestates_pre024.stackoverflow.question.entity.Question;

import java.util.List;

public interface AnswerCustomRepository {

    List<Answer> findByQuestionId(Long id);
}
