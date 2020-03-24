import { Component, OnInit } from '@angular/core';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

@Injectable()
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  func = function() {
    console.log('hi');
    this.http.get('http://localhost:3000/api/home')
    .subscribe((response: string)=>{
      console.log('hi');
        console.log(response);
    });
  }

}
