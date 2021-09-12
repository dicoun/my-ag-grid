import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './GridModule/grid/grid.component';
import { ErrPageComponent } from './PageNotFoundModule/err-page.component';
import {
  LinkAgCellRendererComponent,
  DateAgCellRendererComponent,
  TextAgCellRendererComponent,
  ThumbnailAgCellRendererComponent,
  CheckboxAgCellRendererComponent
} from './GridModule/grid/cell-renderers';
import {
  CheckboxAgHeaderRendererComponent
} from './GridModule/grid/cell-headers';
import { CheckboxComponent } from './GridModule/common/checkbox/checkbox.component';
import {
  SelectionButtonComponent,
  SelectedRecordsComponent,
  TotalRecordsComponent
} from './GridModule/grid/side-bar';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LinkAgCellRendererComponent,
    DateAgCellRendererComponent,
    TextAgCellRendererComponent,
    ThumbnailAgCellRendererComponent,
    CheckboxAgCellRendererComponent,
    CheckboxAgHeaderRendererComponent,
    CheckboxComponent,
    SelectionButtonComponent,
    TotalRecordsComponent,
    SelectedRecordsComponent,
    ErrPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      DateAgCellRendererComponent,
      TextAgCellRendererComponent,
      LinkAgCellRendererComponent,
      ThumbnailAgCellRendererComponent,
      CheckboxAgCellRendererComponent,
      CheckboxAgHeaderRendererComponent,
      SelectionButtonComponent,
      SelectedRecordsComponent,
      TotalRecordsComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
