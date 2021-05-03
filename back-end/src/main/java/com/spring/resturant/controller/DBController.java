package com.spring.resturant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DBController {

    // http://localhost:8080/api/test
    @GetMapping("/test")
    public String test(){
        return " Hello World";
    }
}
