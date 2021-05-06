import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../../services/category-service.service';
import {Category} from '../../model/category';
import {AuthenticationServiceService} from '../../services/security/authentication-service.service';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryServiceService,
              private authenticationService: AuthenticationServiceService) { }

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

  isUserLogin(){
    return this.authenticationService.isLogin();
  }

}
