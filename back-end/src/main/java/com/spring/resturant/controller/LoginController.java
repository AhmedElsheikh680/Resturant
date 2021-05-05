package com.spring.resturant.controller;

import com.spring.resturant.model.User;
import com.spring.resturant.security.jwt.JwtAuthenticationFilter;
import com.spring.resturant.security.jwt.JwtLogin;
import com.spring.resturant.security.jwt.LoginResponse;
import com.spring.resturant.service.AuthoritiesService;
import com.spring.resturant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("")
public class LoginController {

    private JwtAuthenticationFilter jwtAuthenticationFilter;
    private UserService userService;
    private AuthoritiesService authoritiesService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public LoginController(JwtAuthenticationFilter jwtAuthenticationFilter, UserService userService, AuthoritiesService authoritiesService, PasswordEncoder passwordEncoder) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.userService = userService;
        this.authoritiesService = authoritiesService;
        this.passwordEncoder = passwordEncoder;
    }





    // http://localhost:8080/signin
    @PostMapping("/signin")
    public LoginResponse login(@RequestBody JwtLogin jwtLogin){
        return jwtAuthenticationFilter.login(jwtLogin);
    }

    // http://localhost:8080/signup

    @PostMapping("/signup")
    public void createAccountUser(@RequestBody  JwtLogin jwtLogin){
        User user = new User();
        user.setEmail(jwtLogin.getEmail());
        user.setPassword(passwordEncoder.encode(jwtLogin.getPassword()));
        user.setActive(1);
        user.getAuthorities().add(authoritiesService.getAuthorities().get(0));
        userService.createAccountUser(user);
    }

}
