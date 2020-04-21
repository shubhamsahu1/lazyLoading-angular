import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicTableComponent } from './dynamic-table.component';

const routes: Routes = [{ path: '', component: DynamicTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTableRoutingModule { }
