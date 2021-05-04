package com.spring.resturant.controller;

import com.spring.resturant.security.jwt.JwtAuthenticationFilter;
import com.spring.resturant.security.jwt.JwtLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class LoginController {

    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    public LoginController(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    // http://localhost:8080/login
    @PostMapping("/login")
    public String login(@RequestBody JwtLogin jwtLogin){
        return jwtAuthenticationFilter.login(jwtLogin);
    }
}
