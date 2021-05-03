package com.spring.resturant.db;


import com.spring.resturant.model.Authorities;
import com.spring.resturant.model.User;
import com.spring.resturant.repo.AuthoritiesRepo;
import com.spring.resturant.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DBService implements CommandLineRunner {

    private UserRepo userRepo;
    private AuthoritiesRepo authoritiesRepo;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public DBService(UserRepo userRepo, AuthoritiesRepo authoritiesRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.authoritiesRepo = authoritiesRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {

//        User user = new User();
////        user.setEmail("ahmedelsheikh680@gmail.com");
////        user.setPassword(passwordEncoder.encode("12345"));
//        user.setEmail("eslam@gmail.com");
//        user.setPassword(passwordEncoder.encode("6789"));
//        user.setActive(1);
//        List<Authorities> authorities = authoritiesRepo.findAll();
//        user.getAuthorities().add(authorities.get(0));
//        userRepo.save(user);

    }



}
