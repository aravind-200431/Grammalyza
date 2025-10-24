package com.grammer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grammer.DTOs.ServiceRequest;
import com.grammer.Services.ApiServices;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping("/api/grammer")
public class ApiController
{
	
	@Autowired
	ApiServices service;
	
	
	@PostMapping("/query")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<String> correctErrors(@RequestBody ServiceRequest req ){
		
		String res=service.GenerateResponse(req);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}

}
