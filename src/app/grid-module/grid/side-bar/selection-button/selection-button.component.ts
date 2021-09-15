import { Component } from '@angular/core';
import { resources } from 'src/app/grid-module/global/resources';
import { ColId } from 'src/app/grid-module/grid/constants/col-id';
import { IStatusPanelParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent {
  params: IStatusPanelParams;
  tglButtonText = resources.hideSelection;
  show = true;

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  showSelectionMode() {
    this.show = !this.show;
    if (this.show) {
      this.params.columnApi.setColumnWidth(ColId.Description, 300);
      this.tglButtonText = resources.hideSelection;
    } else {
      this.params.columnApi.setColumnWidth(ColId.Description, 340);
      this.tglButtonText = resources.showSelection;
      this.params.api.deselectAll();
    }
    this.params.columnApi.setColumnVisible(ColId.Checkbox, this.show);
  }

}
