import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataLoadService } from '../data-load.service'

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css'],
  providers: [DataLoadService]
})
export class DeathComponent implements OnInit {
  casaulty = new FormGroup({
    country : new FormControl(''),
  });
  selected='China';
  allDeaths=[];
  allDeathMap={};
  currFlagLink="";
  currCountryInfo={};
  
  constructor(private http: HttpClient, private dl: DataLoadService) {
  }

  ngOnInit() {
    var countryWiseData= {};
    var numOfCountries=0;
    console.log('hi');
    this.http.get('http://localhost:3000/api/deathsAll')
    .subscribe(response=>{
      console.log(response);
      this.dl.addToDeath(response);
      this.allDeathMap = response;
    });
    this.http.get('http://localhost:3000/api/deathsCountry')
    .subscribe(response=>{
      console.log(response);
      this.dl.addToCountries(response);
      // this.allDeathMap = response;
      this.onPrintAllCountries();
    });
  }
  onSubmit() {
    console.log(this.casaulty.controls.country);
  }
  onPrintAllDeaths() {
    var currentDeaths = this.dl.getDeath();
    return currentDeaths;
  }
  onPrintAllCountries() {
    var currentAllDeaths = this.dl.getAllCountries();
    var i=0;
    for (var c in currentAllDeaths) {
      this.allDeaths[i]=c;
      i++;
    }
    //console.log(this.allDeaths);
    return currentAllDeaths;
  }
  onPrintThisCountry(country) {
    var currentAllDeaths = this.dl.getAllCountries();
    if(currentAllDeaths[country] == undefined) {
      return;
    }
    // for (var i in currentAllDeaths[country]) {
    //   this.str+=(i+" : ");
    //   this.str+=(currentAllDeaths[country][i]);
    //   this.str+="\n";
    // }
    this.currFlagLink = currentAllDeaths[country]["countryInfo"]["flag"];
    this.currCountryInfo = currentAllDeaths[country];
    return JSON.stringify(currentAllDeaths[country]);
  }
  getCurrFlagLink() {
    return this.currFlagLink;
  }
  
}
