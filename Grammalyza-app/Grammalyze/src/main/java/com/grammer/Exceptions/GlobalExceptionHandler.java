package com.grammer.Exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import jakarta.servlet.http.HttpSessionAttributeListener;

@ControllerAdvice
public class GlobalExceptionHandler {
  
	@ExceptionHandler(EmailAlreadyExistsException.class)
	public ResponseEntity<Map<String,String>> handleEmailAlreadyExists(EmailAlreadyExistsException ex) {
		
		Map<String,String> errors=new HashMap<>();
		
		errors.put("Message",ex.getMessage());
		errors.put("StatusCode",HttpStatus.BAD_REQUEST.toString());
		
		return new ResponseEntity<>(errors,HttpStatus.BAD_REQUEST);
		
	}
}
