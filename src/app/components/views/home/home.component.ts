import { HeaderServiceService } from './../../../services/header-service.service';
import { Header } from './../../../models/header.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderServiceService) {
    headerService.HeaderData = {
      title: 'Home page',
      routeUrl: '/home'
    }
  }


  ngOnInit(): void {

  }

}
