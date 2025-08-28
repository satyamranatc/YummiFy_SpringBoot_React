package com.yummify.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yummify.backend.Models.DishModel;

public interface DishRepo extends JpaRepository<DishModel, Long> {

    List<DishModel> findByRestaurant_id(Long id);

    
}
