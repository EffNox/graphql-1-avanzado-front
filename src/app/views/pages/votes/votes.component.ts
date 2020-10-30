import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';
import { ApiService } from 'src/app/services/api.service';

@Component({ selector: 'app-votes', templateUrl: './votes.component.html', styleUrls: ['./votes.component.scss'] })
export class VotesComponent implements OnInit {

  characters: Character[] = [];
  constructor(public svApi: ApiService) { }


  ngOnInit(): void {
    this.listenVotes();
  }

  listenVotes(): void {
    this.svApi.getPersonajes({}).subscribe(rs => this.characters = rs as Character[]);
    this.svApi.listenVotes().subscribe(rs => this.characters = rs as Character[]);
  }

}
