package com.grammer.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.grammer.Jwt.JwtFilterChain;
import com.grammer.Services.UserDetailsServiceImpl;
import com.grammer.Services.UserServiceImp;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
public class SecurityConfig {
	
	@Autowired
	UserDetailsServiceImpl service;
	
	
	@Bean
	public PasswordEncoder passencoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
	
	@Bean
	public DaoAuthenticationProvider authProvider() {
		DaoAuthenticationProvider provider=new DaoAuthenticationProvider(service);
		
		provider.setPasswordEncoder(passencoder());
		return provider;
	}
	
	@Bean
	public JwtFilterChain jwtFilterChain() {
		return new JwtFilterChain();
	}

	@Bean
	public SecurityFilterChain securityChain(HttpSecurity http) throws Exception {
		http.cors(cors -> cors.configure(http))
		    .csrf(csrf -> csrf.disable())
		    .authorizeHttpRequests(auth -> 
		        auth.requestMatchers("/auth/**").permitAll()
		            .requestMatchers("/api/**").authenticated()
		            .anyRequest().authenticated());
		
		http.authenticationProvider(authProvider());
		http.addFilterBefore(jwtFilterChain(),UsernamePasswordAuthenticationFilter.class);
		return http.build();
		    
	}
}
