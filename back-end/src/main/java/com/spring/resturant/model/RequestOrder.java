package com.spring.resturant.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "request_order")
@Data
@NoArgsConstructor
public class RequestOrder extends CategoryOrder{


    @Column(name = "code")
    private String code;

    @Column(name = "note")
    private String note;

    @Column(name = "total_price")
    private int totalPrice;

    @Column(name = "total_quantity")
    private int totalQuantity;

    @OneToMany(mappedBy = "requestOrder",  cascade = CascadeType.ALL)
    private Set<Item> items;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToOne
    @JoinColumn(name = "from_address_id", referencedColumnName = "id")
    private Address fromAddress;

    @OneToOne
    @JoinColumn(name = "to_address_id", referencedColumnName = "id")
    private Address toAddress;

}
