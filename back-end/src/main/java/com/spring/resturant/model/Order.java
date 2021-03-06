package com.spring.resturant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name ="orders")
public class Order extends PublicData {

    @Column(name = "price")
    private int price;

    @Column(name = "image")
    private String img;

    @Lob
    @Column(name = "description")
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;
}
