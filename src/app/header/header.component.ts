import { Component, OnInit } from '@angular/core';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  navbarOpen=false;
  toggleNavbar=function() {
    this.navbarOpen = !this.navbarOpen;
  }

}
