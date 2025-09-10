package com.grammer.Jwt;

import java.security.Key;
import java.util.Date;
import java.util.concurrent.ConcurrentHashMap.KeySetView;
import java.util.stream.Collectors;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

@Service
public class JwtUtils {
	
	@Value("${jwt.secret}")
	String secret;
	@Value("${jwt.expiration}")
	String expiration;
     
	public String generateTokenFromHeader(HttpServletRequest req) {
		String bearer=req.getHeader("Authorization");
		
		if(bearer != null && bearer.startsWith("Bearer ")) {
			return bearer.substring(7);
		}
		
		return null;
	}
	
	public String generateNameFromToken(String token) {
		  return Jwts.parser()
				     .verifyWith((SecretKey) key())
				     .build()
				     .parseSignedClaims(token)
				     .getPayload().getSubject();
	}
	
	public String generateToken(UserDetails details) {
		String username=details.getUsername();
		String roles=details.getAuthorities().stream()
				            .map(authority -> authority.getAuthority())
				            .collect(Collectors.joining(","));
		
		return Jwts.builder().subject(username)
				             .claim("roles", roles)
				             .issuedAt(new Date())
				             .expiration(new Date(System.currentTimeMillis() + Long.parseLong(expiration)))
				             .signWith(key())
				             .compact();
				             
	}
	
	
	public boolean ValidateToken(String token) {
		return Jwts.parser()
				   .verifyWith((SecretKey) key())
				   .build().parseSignedClaims(token) != null;
	}
	
	public Key key() {
		return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
	}
	
}
