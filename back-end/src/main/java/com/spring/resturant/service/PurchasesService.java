package com.spring.resturant.service;

import com.spring.resturant.dto.PurchasesRequest;
import com.spring.resturant.dto.PurchasesResponse;

public interface PurchasesService {

    PurchasesResponse addRequestOrder(PurchasesRequest purchasesRequest);
}
