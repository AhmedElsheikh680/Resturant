package com.spring.resturant.repo;

import com.spring.resturant.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepo extends JpaRepository<State, Long> {

    List<State> findByCountryCode(String code);
}
