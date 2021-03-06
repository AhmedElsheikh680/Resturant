package com.spring.resturant.model;


import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "request_order")
@Setter
@Getter
@NoArgsConstructor
public class RequestOrder extends CategoryOrder{


    @Column(name = "code")
    private String code;

//    @Column(name = "note")
//    @Lob
//    private String note;

    @Column(name = "total_price")
    private int totalPrice;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @OneToMany(mappedBy = "requestOrder",  cascade = CascadeType.ALL)
    private List<Item> items = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client = new Client();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "from_address_id", referencedColumnName = "id")
    private Address fromAddress = new Address();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "to_address_id", referencedColumnName = "id")
    private Address toAddress = new Address();

    public void addItem(Item item){
        items.add(item);
        item.setRequestOrder(this);
    }
}
