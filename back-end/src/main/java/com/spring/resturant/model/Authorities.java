package com.spring.resturant.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "authorities")
public class Authorities extends BaseEntity {

    @Column(name = "role_name")
    private String roleName;

    @ManyToMany(mappedBy = "authorities")
    Set<User> users = new HashSet<>();
}
