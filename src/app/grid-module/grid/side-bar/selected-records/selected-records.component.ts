import { resources } from 'src/app/grid-module/global/resources';
import { Component } from '@angular/core';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-selected-records',
  templateUrl: './selected-records.component.html',
  styleUrls: ['./selected-records.component.scss']
})
export class SelectedRecordsComponent {
  count = 0;
  resources = resources;
  params: ICellRendererParams;

  agInit(params: any): void {
      this.params = params;
      this.params.api.addEventListener('selectionChanged', this.selectionChange.bind(this));
  }

  selectionChange(): void {
    this.count = this.params.api.getSelectedRows().length;
  }

  ngOnDestroy() {
    this.params.api.removeEventListener('selectionChanged', this.selectionChange.bind(this));
  }
}
