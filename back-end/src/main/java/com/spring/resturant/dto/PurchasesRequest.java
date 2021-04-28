package com.spring.resturant.dto;

import com.spring.resturant.model.Address;
import com.spring.resturant.model.Client;
import com.spring.resturant.model.Item;
import com.spring.resturant.model.RequestOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PurchasesRequest {

    private RequestOrder requestOrder;
    private Client client;
    private Set<Item> items = new HashSet<>();
    private Address fromAddress;
    private Address toAdress;

}
