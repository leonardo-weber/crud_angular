import { ActivatedRoute } from '@angular/router';
import { HeaderServiceService } from './../../../services/header-service.service';
import { Product } from './../../../models/product-model';
import { LogicService } from './../../../services/logic.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private http: HttpClient, private logicService: LogicService, private headerService: HeaderServiceService) { 
    headerService.HeaderData = {
      title: 'Cadastro de produtos',
      routeUrl: '/products'
    }
  }
  
  products: Product[] = [];
  columnsToDisplay = ['id', 'name', 'price', 'actions']

  ngOnInit(): void {
    this.logicService.getRequest().subscribe( data => {
      this.products = data
      console.log(this.products)
    })
  }



}
