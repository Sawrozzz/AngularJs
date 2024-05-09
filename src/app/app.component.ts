import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
  title = 'I am Saroj Adhikari';
  testDemo = 'This is my first angular project';
  isShow = true;
  
}
