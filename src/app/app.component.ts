import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BostonHacks';
  dataSource: object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Average Annual Population Growth',
        subcaption: ' 1955-2015',
        numbersuffix: '%',
        includevalueinlabels: '1',
        labelsepchar: ': ',
        entityFillHoverColor: '#FFF9C4',
        theme: 'fusion'
      },
      // Aesthetics; ranges synced with the slider
      colorrange: {
        minvalue: '0',
        code: '#FFE0B2',
        gradient: '1',
        color: [
          {
            minvalue: '0.5',
            maxvalue: '1.0',
            color: '#FFD74D'
          },
          {
            minvalue: '1.0',
            maxvalue: '2.0',
            color: '#FB8C00'
          },
          {
            minvalue: '2.0',
            maxvalue: '3.0',
            color: '#E65100'
          }
        ]
      },
      // Source data as JSON --> id represents countries of world.
      data: [
        // {
        //   id: 'NA',
        //   showLabel: '1'
        // },
        // {
        //   id: 'SA',
        //   showLabel: '1'
        // },
        // {
        //   id: 'AS',
        //   showLabel: '1'
        // },
        // {
        //   id: 'EU',
        //   showLabel: '1'
        // },
        // {
        //   id: 'AF',
        //   showLabel: '1'
        // },
        // {
        //   id: 'AU',
        //   showLabel: '1'
        // }
      ]
    };
  }
}
