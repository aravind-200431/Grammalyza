package com.grammer.Jwt;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.grammer.Services.UserDetailsServiceImpl;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilterChain extends OncePerRequestFilter {
	
	@Autowired
	UserDetailsServiceImpl userDetails;
	@Autowired
	JwtUtils utils;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		try {
			String token=utils.generateTokenFromHeader(request);
			
			if(token != null && utils.ValidateToken(token)) {
				String username=utils.generateNameFromToken(token);
				UserDetails details=userDetails.loadUserByUsername(username);
				
				if(details != null) {
					UsernamePasswordAuthenticationToken authToken=new UsernamePasswordAuthenticationToken(details,null,details.getAuthorities());
				    authToken.setDetails(request);
				    SecurityContextHolder.getContext().setAuthentication(authToken);
				}
			}
		}catch(Exception e) {
			System.out.println(e.getStackTrace());
		}
		
		
		
		filterChain.doFilter(request, response);
		
	}

}
