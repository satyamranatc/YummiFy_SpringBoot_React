package com.yummify.backend.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public RestaurantModel addRestaurant(@RequestBody RestaurantModel restaurant) {
        return repo.save(restaurant);
    }


    @PutMapping("/update/{id}")
    public RestaurantModel updateRestaurant(@PathVariable Long id, @RequestBody RestaurantModel restaurant) {
        
        RestaurantModel Rest = repo.findById(id).get();

        Rest.setName(restaurant.getName());
        Rest.setAddress(restaurant.getAddress());
        Rest.setImage(restaurant.getImage());
        Rest.setDescription(restaurant.getDescription());

        return repo.save(Rest);


    }

    @DeleteMapping("/delete/{id}")
    public void deleteRestaurant(@PathVariable Long id) {
        repo.deleteById(id);
    }

  

    
}
