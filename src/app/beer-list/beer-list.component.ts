import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  protected beerList: any;
  protected selectedBeer: any;

  // Nie trzeba deklarować pozniej this.httpClient = httpClient;
  constructor(private httpClient: HttpClient) {}

  // Punkt startowy komponentu, konstruktor angularowy
  ngOnInit(): void {
    const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=20';
    this.httpClient.get(url).subscribe((data) => {
      this.beerList = data;
    });
  }

  protected onBeerSelect(beer: string) {
    this.selectedBeer = beer;
  }
}

// API w appcomponent 
// a w html listy [list] = 'beerList'