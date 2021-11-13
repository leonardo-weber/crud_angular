import { LogicService } from './../../services/logic.service';
import { Product } from 'src/app/models/product-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private logicService: LogicService, private routeNav: Router) { }

  products!: Product;

  ngOnInit(): void {  
    const id = +this.route.snapshot.paramMap.get('id')!
    this.logicService.getRequestWithID(id).subscribe( data => {
      this.products = data
    })
  }

  delete (): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.logicService.delete(id).subscribe( () =>{
      this.routeNav.navigate(['/products'])
      this.logicService.snackBarToggle('Produto excluído com sucesso.')
    })
  }

}
