import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../../services/category-service.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data
      }
    )
  }

}
