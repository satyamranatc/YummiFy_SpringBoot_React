package com.yummify.backend.Models;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
    @JoinColumn(name = "restaurant_id", referencedColumnName = "id")
    private RestaurantModel restaurant;

    public DishModel() {}

    public DishModel(String name, String description, String image, Double price, RestaurantModel rest) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.restaurant = rest;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public RestaurantModel getRestaurant() {
        return restaurant;
    }

    public void setRestaurant_id(RestaurantModel restaurant) {
        this.restaurant =   restaurant;
    }
    
}
