package com.grammer.Configurations;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
            
	        @Value("${frontend.url}")
	        String url;
	        
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
				        .allowCredentials(true)
				        .allowedMethods("GET","POST","DELETE","PUT","PATCH","OPTIONS")
				        .allowedOrigins(url)
				        .maxAge(3600);
			}
	
}
