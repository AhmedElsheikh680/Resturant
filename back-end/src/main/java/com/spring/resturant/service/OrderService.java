package com.spring.resturant.service;

import com.spring.resturant.model.Order;
import com.spring.resturant.repo.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepo orderRepo;

    public List<Order> getOrdersByCategoryId(Long id, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return orderRepo.findByCategoryId(id, pageable).getContent();
    }

    public List<Order> getOrdersByKeyName(String name, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return orderRepo.findByNameContaining(name, pageable).getContent();
    }

    public Order getOrderById(Long id){
        return orderRepo.findById(id).get();
    }

    public List<Order> getAllOrders(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return orderRepo.findAll(pageable).getContent();
    }
}
