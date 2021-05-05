package com.spring.resturant.service;

import com.spring.resturant.model.Authorities;
import com.spring.resturant.repo.AuthoritiesRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthoritiesService {

    private final AuthoritiesRepo authoritiesRepo;

    @Transactional
    public List<Authorities> getAuthorities(){
        return authoritiesRepo.findAll();
    }


}
