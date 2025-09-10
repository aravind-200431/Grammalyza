package com.grammer.Exceptions;

public class EmailAlreadyExistsException extends Exception {
	
	private static final long serialVersionUID = 1L;

	public EmailAlreadyExistsException(String error) {
		super(error);
	}

}
