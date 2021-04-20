package com.spring.resturant.controller;

import com.spring.resturant.model.Order;
import com.spring.resturant.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    // http://localhost:8080/api/v1/orders
    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    // http://localhost:8080/api/v1/category/{id}
    @GetMapping("/category/{id}")
    public List<Order> getOrdersByCategoryId(@PathVariable Long id){
        return orderService.getOrdersByCategoryId(id);
    }

    // http://localhost:8080/api/v1/orderkey/key
    @GetMapping("/orderkey/{name}")
    public List<Order> getOrdersByKeyName(@PathVariable  String name){
        return orderService.getOrdersByKeyName(name);
    }

    // http://localhost:8080/api/v1/order/{id}
    @GetMapping("/order/{id}")
    public Order getOrderById(@PathVariable Long id){
        return orderService.getOrderById(id);
    }
}
