import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Header } from '../models/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  private _headerData = new BehaviorSubject<Header>( {
    title:'Início',
    routeUrl: ''
  })
 
 
  constructor() { }


  get headerData () {
    return this._headerData.value
  }

  set HeaderData (headerData: Header) {
    this._headerData.next(headerData)
  }



}



