import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CategoryService } from './category.service';
import { Category } from './Category';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  providers: [CategoryService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  title = 'product list will display here ';
  categories: Category[] = [];
  isLoading:boolean=true;
  products: Product[] = [
   
  ];
  isVisible = true;
  toggleShow() {
    this.isVisible = !this.isVisible;
  }
  // data
  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(
      (data) => {
        console.log(data);
        this.categories = data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log('Error:', error);
      }
    );
  }

  getDummy(): string {
    return 'This is dummy content';
  }
  message = this.getDummy();
}
