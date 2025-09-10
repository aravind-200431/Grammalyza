package com.grammer.Controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grammer.DTOs.FeedReq;
import com.grammer.Services.FeedbackServices;

@RestController
@RequestMapping("/feedback")
public class FeedBackControllers {
	
	@Autowired
	FeedbackServices service;

	@PostMapping("/add")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<String> addFeed(@RequestBody FeedReq req,Principal principal){
		String res=service.addFeedback(req, principal);
		
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
}
