package com.spring.resturant.repo;

import com.spring.resturant.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo  extends JpaRepository<Order, Long> {

    Page<Order> findByCategoryId(Long id, Pageable pageable);

    Page<Order> findByNameContaining(String name, Pageable pageable);


}
