import { resources } from 'src/app/grid-module/global/resources';
import { Component, OnDestroy } from '@angular/core';
import { IStatusPanelParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-selected-records',
  templateUrl: './selected-records.component.html',
  styleUrls: ['./selected-records.component.scss']
})
export class SelectedRecordsComponent implements OnDestroy {
  count = 0;
  resources = resources;
  params: IStatusPanelParams;

  public agInit(params: IStatusPanelParams): void {
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
