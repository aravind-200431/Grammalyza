package com.grammer.Controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grammer.DTOs.LogReq;
import com.grammer.DTOs.SignReq;
import com.grammer.Exceptions.EmailAlreadyExistsException;
import com.grammer.Jwt.JwtResponse;
import com.grammer.Models.User;
import com.grammer.Services.AuthServices;

@RestController
@RequestMapping("/auth")
public class AuthControllers {
	
	@Autowired
	AuthServices service;
    
	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestBody SignReq req){
		try {
			User user=service.signupService(req);
			
			return new ResponseEntity<>(user,HttpStatus.OK);
		} catch (EmailAlreadyExistsException e) {
			e.printStackTrace();
			return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<JwtResponse> login(@RequestBody LogReq req){
		JwtResponse response=service.authenticate(req);
		
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
}
