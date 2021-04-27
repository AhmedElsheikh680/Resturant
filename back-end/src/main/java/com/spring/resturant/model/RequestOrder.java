package com.spring.resturant.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

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


}
