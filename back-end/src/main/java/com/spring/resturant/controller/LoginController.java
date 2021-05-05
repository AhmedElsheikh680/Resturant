package com.spring.resturant.controller;

import com.spring.resturant.security.jwt.JwtAuthenticationFilter;
import com.spring.resturant.security.jwt.JwtLogin;
import com.spring.resturant.security.jwt.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("")
public class LoginController {

    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    public LoginController(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    // http://localhost:8080/signin
    @PostMapping("/signin")
    public LoginResponse login(@RequestBody JwtLogin jwtLogin){
        return jwtAuthenticationFilter.login(jwtLogin);
    }
}
