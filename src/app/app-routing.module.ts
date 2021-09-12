import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './GridModule/grid/grid.component';
import { ErrPageComponent } from './PageNotFoundModule/err-page.component';


const routes: Routes = [
  { path: '', component: GridComponent },
  { path: '**', component: ErrPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
