package com.spring.resturant.controller;

import com.spring.resturant.model.Country;
import com.spring.resturant.model.State;
import com.spring.resturant.service.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class CountryController {

    private final CountryService countryService;

    // http://localhost:8080/api/v1/countries
    @GetMapping("/countries")
    public List<Country> getAllCountries(){
        return countryService.getAllCountries();
    }



}
