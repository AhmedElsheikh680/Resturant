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
    public List<Order> getAllOrders(@RequestParam int page, @RequestParam int size){
        return orderService.getAllOrders(page, size);
    }

    // http://localhost:8080/api/v1/category/{id}
    @GetMapping("/category/{id}")
    public List<Order> getOrdersByCategoryId(@PathVariable Long id, @RequestParam int page, int size){

        return orderService.getOrdersByCategoryId(id, page, size);
    }

    // http://localhost:8080/api/v1/orderkey/key
    @GetMapping("/orderkey/{name}")
    public List<Order> getOrdersByKeyName(@PathVariable  String name, @RequestParam int page, @RequestParam int size){
        return orderService.getOrdersByKeyName(name, page, size);
    }

    // http://localhost:8080/api/v1/order/{id}
    @GetMapping("/order/{id}")
    public Order getOrderById(@PathVariable Long id){

        return orderService.getOrderById(id);
    }
}
