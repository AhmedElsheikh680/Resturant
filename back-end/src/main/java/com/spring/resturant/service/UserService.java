package com.spring.resturant.service;

import com.spring.resturant.dto.UserPrinciple;
import com.spring.resturant.model.User;
import com.spring.resturant.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email);
        UserPrinciple userPrinciple = new UserPrinciple(user);
        return userPrinciple;
    }
}
