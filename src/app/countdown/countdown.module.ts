import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownRoutingModule } from './countdown-routing.module';
import { CountdownComponent } from './countdown.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';
import { ControlComponent } from './control/control.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    CountdownComponent,
    StopwatchComponent,
    TimerComponent,
    ControlComponent,
    DisplayComponent],
  imports: [
    CommonModule,
    CountdownRoutingModule
  ]
})
export class CountdownModule { }
