import { Observable } from 'rxjs';
import { LogicService } from './../../services/logic.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }


  constructor(private logicService: LogicService, private routerNav: Router) { }

  ngOnInit(): void {

  }

  registerProduct(): void {
    this.logicService.postRequest(this.product).subscribe( () => {
      this.routerNav.navigate(['/products'])
      this.logicService.snackBarToggle('Produto cadastrado com sucesso.')

    })
  }
}
