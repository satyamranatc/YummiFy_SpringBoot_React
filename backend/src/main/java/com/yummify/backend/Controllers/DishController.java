package com.yummify.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yummify.backend.Models.DishModel;
import com.yummify.backend.Repository.DishRepo;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/dishes")
public class DishController {

    @Autowired
    private DishRepo repo;

    @GetMapping("/all")
    public List<DishModel> getAllDishes() {
        return repo.findAll();
    }
    @GetMapping("/byRestaurant/{id}")
    public List<DishModel> getDishesByRestaurant(@PathVariable Long id) {
        return repo.findByRestaurant_id(id);
    }

    @PostMapping("/add")
    public DishModel addDish(DishModel dish) {
        return repo.save(dish);
    }




    
}
