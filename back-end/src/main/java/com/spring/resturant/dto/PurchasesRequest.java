package com.spring.resturant.dto;

import com.spring.resturant.model.Address;
import com.spring.resturant.model.Client;
import com.spring.resturant.model.Item;
import com.spring.resturant.model.RequestOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class PurchasesRequest {

    private RequestOrder requestOrder;
    private Client client;
    private List<Item> items;
    private Address fromAddress;
    private Address toAddress;

}
