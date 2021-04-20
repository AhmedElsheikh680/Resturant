import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../../services/category-service.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {

  categories: Category[];
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
