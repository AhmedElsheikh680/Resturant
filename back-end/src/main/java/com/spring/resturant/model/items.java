package com.spring.resturant.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "items")
@Data
@NoArgsConstructor
public class items extends BaseEntity{

    @Column(name = "image")
    private String img;

    @Column(name = "price")
    private int price;

    @Column(name = "quantity")
    private int quantity;


}
