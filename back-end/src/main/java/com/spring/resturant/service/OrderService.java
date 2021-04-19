package com.spring.resturant.service;

import com.spring.resturant.model.Order;
import com.spring.resturant.repo.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepo orderRepo;

    public List<Order> getOrdersByCategoryId(Long id){
        return orderRepo.findByCategoryId(id);
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}
