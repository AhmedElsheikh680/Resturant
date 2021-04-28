package com.spring.resturant.service;

import com.spring.resturant.dto.PurchasesRequest;
import com.spring.resturant.dto.PurchasesResponse;
import com.spring.resturant.model.RequestOrder;
import com.spring.resturant.repo.ClientRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class PurchasesServiceImpl implements PurchasesService{
    private final ClientRepo clientRepo;
    @Override
    public PurchasesResponse addRequestOrder(PurchasesRequest purchasesRequest) {


        RequestOrder requestOrder  = purchasesRequest.getRequestOrder();

        String myCode = getCode();
        requestOrder.setCode(myCode);

        requestOrder.setItems(purchasesRequest.getItems());
        purchasesRequest.getItems().forEach(item -> item.setRequestOrder(requestOrder));

        requestOrder.setFromAddress(purchasesRequest.getFromAddress());
        requestOrder.setToAddress(purchasesRequest.getToAdress());

        requestOrder.setClient(purchasesRequest.getClient());
        Set<RequestOrder> requestOrders = new HashSet<>();
        requestOrders.add(requestOrder);
        purchasesRequest.getClient().setRequestOrders(requestOrders);


        clientRepo.save(purchasesRequest.getClient());




        return new PurchasesResponse(purchasesRequest.getClient().getName(), myCode);
    }

    private String getCode() {
        return UUID.randomUUID().toString();
    }
}
