package com.spring.resturant.controller;

import com.spring.resturant.model.State;
import com.spring.resturant.service.StateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class StateController {

    private final StateService stateService;

    // http://localhost:8080/api/v1/states
    @GetMapping("/states")
    public List<State> getAllStates(){
        return stateService.getAllStates();
    }

    // http://localhost:8080/api/v1/statesByCountryCode/{code}
    @GetMapping("/statesByCountryCode/{code}")
    public List<State> getStatesByCountryCodde(@PathVariable String code){
        return stateService.getAllStatesByCountryCode(code);
    }
}
