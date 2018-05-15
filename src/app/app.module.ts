import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartModule, ColumnSeriesService, LegendService, CategoryService, TooltipService, LineSeriesService, DataLabelService  } from '@syncfusion/ej2-ng-charts';


@NgModule({
  declarations: [
    AppComponent,     
    ChartComponent
  ],
  imports: [
    BrowserModule,    
    ChartModule
  ],
  providers: [ColumnSeriesService, CategoryService, LineSeriesService, LegendService, DataLabelService, TooltipService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
