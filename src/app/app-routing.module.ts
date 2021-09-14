import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid-module/grid/grid.component';
import { PageNotFoundComponent } from './page-not-found-module/page-not-found.component';


const routes: Routes = [
  { path: '', component: GridComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
