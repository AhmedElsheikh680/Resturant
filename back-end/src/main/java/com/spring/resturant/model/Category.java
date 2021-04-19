package com.spring.resturant.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Category  extends CategoryOrder{

    @Column(name = "category_logo")
    private String logo;

    @JsonIgnore
    @OneToMany(mappedBy="category")
    Set<Order> orders;

}
