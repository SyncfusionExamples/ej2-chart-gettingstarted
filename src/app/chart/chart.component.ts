import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {
      public chartData: Object [];
      public primaryXAxis: Object; 
      public title: Object;
      public legendSettings: Object;
      public lineMarker : Object;
      public columnMarker : Object;
      public tooltip : Object;


    ngOnInit(): void {
        // Data for chart series
       this.chartData = [
             { year: '2000', silver: 35, gold: 25 }, { year: '2001', silver: 28, gold: 20 },
             { year: '2002', silver: 34, gold: 21 }, { year: '2003', silver: 32, gold: 15 },
             { year: '2004', silver: 40, gold: 30 }
        ];
       this.primaryXAxis = { valueType: 'Category'  };
       this.title = 'Olympic Medal Count';
       this.legendSettings = {visible : true};
       this.columnMarker = { dataLabel : { visible :true, position: 'Top'}};
       this.lineMarker = { visible : true, dataLabel : { visible :true }};
       this.tooltip = {enable : true};

    }

}
