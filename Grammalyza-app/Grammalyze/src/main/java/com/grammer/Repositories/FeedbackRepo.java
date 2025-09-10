package com.grammer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grammer.Models.Feedback;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

}
