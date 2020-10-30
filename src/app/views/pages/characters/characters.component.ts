import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';
import { ApiService } from 'src/app/services/api.service';

@Component({ selector: 'app-characters', templateUrl: './characters.component.html', styleUrls: ['./characters.component.scss'] })
export class CharactersComponent implements OnInit {

  dt: Character[] = [];
  constructor(public svApi: ApiService) { }

  ngOnInit(): void {
    this.svApi.getPersonajes({ skip: false }).subscribe((rs: Character[]) => this.dt = rs);
  }

}
