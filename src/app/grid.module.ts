import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid-module/grid/grid.component';
import {
  LinkAgCellRendererComponent,
  DateAgCellRendererComponent,
  TextAgCellRendererComponent,
  ThumbnailAgCellRendererComponent,
  CheckboxAgCellRendererComponent
} from './grid-module/grid/cell-renderers';
import {
  CheckboxAgHeaderRendererComponent
} from './grid-module/grid/cell-headers';
import { CheckboxComponent } from './grid-module/common/checkbox/checkbox.component';
import {
  SelectionButtonComponent,
  SelectedRecordsComponent,
  TotalRecordsComponent
} from './grid-module/grid/side-bar';

@NgModule({
  declarations: [
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
    SelectedRecordsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
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
  bootstrap: [GridComponent]
})
export class GridModule { }
