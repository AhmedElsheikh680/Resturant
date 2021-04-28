package com.spring.resturant.controller;

import com.spring.resturant.dto.PurchasesRequest;
import com.spring.resturant.dto.PurchasesResponse;
import com.spring.resturant.service.PurchasesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/buy")
@RequiredArgsConstructor
public class PurchasesController {

    private final PurchasesService purchasesService;

    @PostMapping("/purchase")
    public PurchasesResponse addRequestOrder(@RequestBody PurchasesRequest purchasesRequest){
        return purchasesService.addRequestOrder(purchasesRequest);
    }
}
