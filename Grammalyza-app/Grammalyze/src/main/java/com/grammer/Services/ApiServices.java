package com.grammer.Services;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.grammer.DTOs.ServiceRequest;

@Service
public class ApiServices {

	@Value("${Gemini.url}")
	String gemini_url;
	@Value("${Gemini.key}")
	String gemini_key;
	
	@Autowired
	WebClient client;
	
	public String GenerateResponse(ServiceRequest req) {
		String prompt=buildPrompt(req);
		
		Map<String,Object[]> body=Map.of(
		   "contents",new Object[] {
				   Map.of("parts",new Object[] {
						   Map.of("text",prompt)
				   })
		   }
		);
		
		String response=client.post()
				              .uri(gemini_url+gemini_key)
				              .bodyValue(body)
				              .header("Content-Type","application/json")
				              .retrieve()
				              .bodyToMono(String.class)
				              .block();
		
		String extracted=extractContext(response);
		
		return extracted;
	}

	private String extractContext(String response) {
		
		try {
			ObjectMapper mapper=new ObjectMapper();
			JsonNode node=mapper.readTree(response);
			
			String res=node.path("candidates")
					       .get(0)
					       .path("content")
					       .path("parts")
					       .get(0)
					       .path("text")
					       .asText();
			
			return res;
			
		}catch(Exception ex) {
			return "Error occured"+ex.getMessage();
		}
		
	}

	private String buildPrompt(ServiceRequest req) {
		StringBuilder prompt=new StringBuilder();
		
		prompt.append("Correct the grammatical errors in the given sentence please don't include explanation, ");
		
		if(req.getQuery() != null && !req.getQuery().isEmpty()) {
			prompt.append("Also ").append(req.getQuery());
		}
		
		prompt.append("\n Given sentence: \n");
		prompt.append(req.getSentence());
		
		return prompt.toString();
	}
}
