import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MultiSelectBoxComponent } from './components/multi-select-box/multi-select-box.component';
import { TrafficImpactComponent } from './pages/traffic-impact/traffic-impact.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiSelectBoxComponent,
    TrafficImpactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
