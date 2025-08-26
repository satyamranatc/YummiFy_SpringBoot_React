package com.yummify.backend.Models;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class DishModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;


    public String name;
    public String description;
    public String image;
    public Double price;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    public RestaurantModel restaurant;
    
}
