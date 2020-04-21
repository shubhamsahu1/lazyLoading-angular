import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'countdown',
    loadChildren: () => import('./countdown/countdown.module').then(m => m.CountdownModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
  },
  {
    path: 'box',
    loadChildren: () => import('./box/box.module').then(m => m.BoxModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./dynamic-table/dynamic-table.module').then(m => m.DynamicTableModule)
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
