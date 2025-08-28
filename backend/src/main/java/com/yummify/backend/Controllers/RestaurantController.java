package com.yummify.backend.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yummify.backend.Repository.RestaurantRepo;
import com.yummify.backend.Models.RestaurantModel;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantRepo repo;

    @GetMapping("/all")
    public List<RestaurantModel> getAllRestaurants() {
        return repo.findAll();
    }
    @GetMapping("/{id}")
    public  Optional<RestaurantModel> getOneRestaurant(@PathVariable Long id) {
        return repo.findById(id);
    }

    @PostMapping("/add")
    public RestaurantModel addRestaurant(RestaurantModel restaurant) {
        return repo.save(restaurant);
    }

  

    
}
