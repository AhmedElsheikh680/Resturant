package com.spring.resturant.repo;

import com.spring.resturant.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    public User findByEmail(String email);
}
