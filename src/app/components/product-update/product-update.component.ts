import { Product } from 'src/app/models/product-model';
import { LogicService } from './../../services/logic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private router: ActivatedRoute, private logicService: LogicService, private routerNav: Router) { }

  products!: Product

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get('id')!
    this.logicService.getRequestWithID(id).subscribe( data => {
      this.products = data
    })
  }

  update () : void {
    const id = +this.router.snapshot.paramMap.get('id')!
    this.logicService.putRequest(id ,this.products).subscribe( () => {
      this.routerNav.navigate(['/products'])
      this.logicService.snackBarToggle('Produto atualizado com sucesso.')
    })
  }

}
