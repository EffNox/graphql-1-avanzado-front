import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './views/pages/characters/characters.component';
import { VotesComponent } from './views/pages/votes/votes.component';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'characters', component: CharactersComponent },
    { path: 'votes', component: VotesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'characters' }
  ], { useHash: !0 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
