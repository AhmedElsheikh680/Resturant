package com.spring.resturant.service;


import com.spring.resturant.model.State;
import com.spring.resturant.repo.StateRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StateService {

    private final StateRepo stateRepo;

    public List<State> getAllStates(){
        return stateRepo.findAll();
    }
}
