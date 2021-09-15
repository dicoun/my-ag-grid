import { resources } from 'src/app/grid-module/global/resources';
import { Component, OnDestroy } from '@angular/core';
import { IToolPanelParams } from '@ag-grid-community/core';
import { ICellRendererParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-total-records',
  templateUrl: './total-records.component.html',
  styleUrls: ['./total-records.component.scss']
})
export class TotalRecordsComponent implements OnDestroy {
  params: IToolPanelParams;
  count = 0;
  resources = resources;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.updateModel.bind(this));
  }

  updateModel(): void {
    this.count = this.params.api.getDisplayedRowCount();
  }

  ngOnDestroy() {
    this.params.api.removeEventListener('modelUpdated', this.updateModel.bind(this));
  }
}
