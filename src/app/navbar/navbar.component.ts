import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  siteName: string = "Details Manager";


  ngOnInit(): void {
    
  }

}
