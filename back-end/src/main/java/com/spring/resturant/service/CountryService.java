package com.spring.resturant.service;

import com.spring.resturant.model.Country;
import com.spring.resturant.model.State;
import com.spring.resturant.repo.CountryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CountryService  {

    private final CountryRepo countryRepo;



    public List<Country> getAllCountries(){
        return countryRepo.findAll();
    }
}
