package com.spring.resturant.repo;

import com.spring.resturant.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo  extends JpaRepository<Order, Long> {

    List<Order> findByCategoryId(Long id);

    List<Order> findByNameContaining(String name);
}
