package com.spring.resturant.service;

import com.spring.resturant.model.Category;
import com.spring.resturant.repo.CategoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepo categoryRepo;



    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
}
