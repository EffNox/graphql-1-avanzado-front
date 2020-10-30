import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getPersonajes } from '../operations/query';
import { pluck } from 'rxjs/operators';
import { changeVotes } from '../operations/subscription';
import { addVote } from '../operations/mutation';


@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private apo: Apollo) { }

  getPersonajes = ({ skip = true }) => {
    return this.apo.query({ query: getPersonajes, variables: { skip }, fetchPolicy: 'network-only' }).pipe(pluck('data', 'characters'));
  }

  listenVotes = () => this.apo.subscribe({ query: changeVotes }).pipe(pluck('data', 'changeVotes'));

  addVote = ({ id = 1 }) => {
    return this.apo.mutate({ mutation: addVote, variables: { id } }).pipe(pluck('data', 'addVote'));
  }

}
