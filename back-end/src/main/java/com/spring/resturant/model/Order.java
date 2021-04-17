package com.spring.resturant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;Ser @ in model #7


        import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orderfood")
public class Order extends CategoryOrder {

    @Column(name = "price")
    private int price;

    @Column(name = "image")
    private String img;

    @Column(name = "description")
    private String description;
}
