package com.grammer.Services;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.grammer.DTOs.LogReq;
import com.grammer.DTOs.SignReq;
import com.grammer.Exceptions.EmailAlreadyExistsException;
import com.grammer.Jwt.JwtResponse;
import com.grammer.Jwt.JwtUtils;
import com.grammer.Models.User;
import com.grammer.Repositories.UserRepo;

@Service
public class AuthServices {

	@Autowired
	UserRepo repo;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	AuthenticationManager manager;
	@Autowired
	JwtUtils utils;
	
	public User signupService(SignReq req) throws EmailAlreadyExistsException {
		User newUser=new User();

		
		if(repo.existsByEmail(req.getEmail())) {
			throw new EmailAlreadyExistsException("User with this email already exists!");
		}
		
		newUser.setUsername(req.getUsername());
		newUser.setEmail(req.getEmail());
		newUser.setPassword(encoder.encode(req.getPassword()));
		
		repo.save(newUser);
		
		return newUser;
	}
	
	public JwtResponse authenticate(LogReq req) {
		Authentication authentication=manager.authenticate(
				 new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword())
				);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		UserDetails details=(UserDetails) authentication.getPrincipal();
		String token=utils.generateToken(details);
		
		return new JwtResponse(token);
	}
}
