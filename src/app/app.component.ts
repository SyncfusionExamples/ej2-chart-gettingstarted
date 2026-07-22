import { Component } from '@angular/core';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Syncfusion Chart - Olympic Medal Count';
}
