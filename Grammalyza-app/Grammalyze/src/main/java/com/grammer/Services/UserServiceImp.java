package com.grammer.Services;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.grammer.Models.User;

public class UserServiceImp implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private String username;
	private String password;
	private String email;
	
	private Collection<? extends GrantedAuthority> authorities;
	
	public UserServiceImp(String username,String email,String password,Collection<? extends GrantedAuthority> authorities) {
		this.username=username;
		this.password=password;
		this.email=email;
		this.authorities=authorities;
	}
	
	public static UserServiceImp build(User user) {
		GrantedAuthority authority=new SimpleGrantedAuthority(user.getRole());
		
		return new UserServiceImp(user.getUsername(),
				user.getEmail(),
				user.getPassword(),Collections.singleton(authority));
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

}
