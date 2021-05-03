package com.spring.resturant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/me")
public class DBController {

    // http://localhost:8080/me/test
    @GetMapping("/test")
    public String test(){
        return " Hello World";
    }

    // http://localhost:8080/me/adminuser
    @GetMapping("/adminuser")
    public String adminUser(){
        return " I am Admin || User";
    }

    // http://localhost:8080/me/admin
    @GetMapping("/admin")
    public String admin(){
        return " I am Admin";
    }
}
