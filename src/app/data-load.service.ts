import { Injectable } from '@angular/core';
//import { Observable  } from 'rxjs/Observable';

@Injectable()
export class DataLoadService {
    allDeath = {};
    allCountriesDeath = {};
    currFlagLink="";

    addToDeath(response) {
        this.allDeath = response;
        console.log(this.allDeath);
    }
    addToCountries(response) {
        for(var i in response) {
            var country=response[i]['country'];
            this.allCountriesDeath[country] = {};
            for(var j in response[i]) {
                if(j != "country" ) {
                    this.allCountriesDeath[country][j]=response[i][j];
                }
                if(j == "countryInfo") {
                    this.currFlagLink = response[i][j]["flag"];
                }
            }
            // console.log(this.allCountriesDeath[country]);
        }
    }
    getDeath() {
        return this.allDeath;
    };
    getAllCountries() {
        return this.allCountriesDeath;
    };
}