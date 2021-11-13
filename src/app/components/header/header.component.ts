import { HeaderServiceService } from './../../services/header-service.service';
import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private headerService: HeaderServiceService) { }

  ngOnInit(): void {
  }

  get title () {
    return this.headerService.headerData.title
  }

  
}
