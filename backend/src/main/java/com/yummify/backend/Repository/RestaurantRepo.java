package com.yummify.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yummify.backend.Models.RestaurantModel;

public interface RestaurantRepo extends JpaRepository<RestaurantModel, Long> {

}