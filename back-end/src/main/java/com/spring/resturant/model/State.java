package com.spring.resturant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "state")
public class State extends PublicData{




    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
}
