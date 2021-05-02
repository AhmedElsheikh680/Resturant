package com.spring.resturant.service;

import com.spring.resturant.dto.PurchasesRequest;
import com.spring.resturant.dto.PurchasesResponse;
import com.spring.resturant.model.Item;
import com.spring.resturant.model.RequestOrder;
import com.spring.resturant.repo.ClientRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PurchasesServiceImpl implements PurchasesService{
    private final ClientRepo clientRepo;

    @Override
    @Transactional
    public PurchasesResponse addRequestOrder(PurchasesRequest purchasesRequest) {

        //#1
        RequestOrder requestOrder  = purchasesRequest.getRequestOrder();

        //#2
        String myCode = getCode();
        requestOrder.setCode(myCode);

        //#3
//        requestOrder.setItems(purchasesRequest.getItems());
//        purchasesRequest.getItems().forEach(item -> item.setRequestOrder(requestOrder));
        List<Item> items = purchasesRequest.getItems();
        items.forEach(item -> requestOrder.addItem(item));

        //#4
        requestOrder.setFromAddress(purchasesRequest.getFromAddress());
        requestOrder.setToAddress(purchasesRequest.getToAddress());

        //#5
//        requestOrder.setClient(purchasesRequest.getClient());
//        Set<RequestOrder> requestOrders = new HashSet<>();
//        requestOrders.add(requestOrder);
//        purchasesRequest.getClient().setRequestOrders(requestOrders);
        purchasesRequest.getClient().addRequestOrder(requestOrder);


        clientRepo.save(purchasesRequest.getClient());




        return new PurchasesResponse(purchasesRequest.getClient().getName(), myCode);
    }

    private String getCode() {
        return UUID.randomUUID().toString();
    }
}
