package com.grammer.Services;

import java.security.Principal;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.grammer.DTOs.FeedReq;
import com.grammer.Models.Feedback;
import com.grammer.Models.User;
import com.grammer.Repositories.FeedbackRepo;
import com.grammer.Repositories.UserRepo;

@Service
public class FeedbackServices {

	@Autowired
	FeedbackRepo repo;
	@Autowired
	UserRepo repoUser;
	
	public String addFeedback(FeedReq req,Principal principal) {
		String username=principal.getName();
		User user=repoUser.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("User not found!"));
		Feedback feedback=new Feedback();
		
		feedback.setFeedback(req.getFeedback());
		feedback.setUser(user);

	
		
		repo.save(feedback);
		
		return "Feedback added successfully!";
	}
}
