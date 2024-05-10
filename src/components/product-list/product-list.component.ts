import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Category } from './Category';
import { CategoryService } from './category.service';


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
    // {
    //   id: 1,
    //   title: 'Iphone',
    //   description: 'Iphone 12 pro max best phone',
    //   price: 130000,
    // },
    // {
    //   id: 2,
    //   title: 'Samsung',
    //   description: 'Samsung s24 max best phone',
    //   price: 100000,
    // },
    // {
    //   id: 3,
    //   title: 'Redmi',
    //   description: 'Redmi note 7 pro best phone in low price',
    //   price: 30000,
    // },
    // {
    //   id: 5,
    //   title: 'iphone 15',
    //   description: 'Redmi note 7 pro best phone in low price',
    //   price: 30000,
    // },
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
  //api = https://localhost:7055/api/Categorie
}
