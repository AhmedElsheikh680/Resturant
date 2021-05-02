package com.spring.resturant.controller;

import com.spring.resturant.dto.PurchasesRequest;
import com.spring.resturant.dto.PurchasesResponse;
import com.spring.resturant.service.PurchasesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1/buy")
@RequiredArgsConstructor
public class PurchasesController {

    private final PurchasesService purchasesService;

        // http://localhost:8080/api/v1/buy/purchase
    @PostMapping("/purchase")
    public PurchasesResponse addRequestOrder(@RequestBody PurchasesRequest purchasesRequest){
//        System.out.println(purchasesRequest.getToAdress().size());
        return purchasesService.addRequestOrder(purchasesRequest);
    }
}
