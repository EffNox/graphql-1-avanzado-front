import { Component, Input, OnChanges } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';
import { ApiService } from 'src/app/services/api.service';

@Component({ selector: 'app-chart', templateUrl: './chart.component.html', styleUrls: ['./chart.component.scss'] })
export class ChartComponent implements OnChanges {

  @Input() dt: Character[] = [];

  results = [];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Breaking Bad - Votaciones';
  showYAxisLabel = true;
  yAxisLabel = 'Popularidad';
  animations = true;
  showDataLabel = true;
  colorScheme = 'cool';

  constructor(private svApi: ApiService) { }

  ngOnChanges(changes): void {
    changes.dt.currentValue.forEach(({ id, name, votes }) => this.results.push({ name: `${id} - ${name}`, value: votes, label: 'xd' }));
    this.results = [...this.results];
  }

  onSelect(ev): void {
    this.results = [];
    // new Date(val).toLocaleString('en-us', { month: 'short', year: 'numeric' });
    const id = ev.name?.split(' -')[0] ?? ev.split(' -')[0];
    this.svApi.addVote({ id }).subscribe(console.log);
  }

}
