import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from '@ag-grid-community/angular';
import { fromEvent, Subscription } from 'rxjs';
import { IHeaderParams } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-checkbox-ag-header-renderer',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxAgHeaderRendererComponent implements IHeaderAngularComp, OnDestroy {
  public params: IHeaderParams;
  public checked = false;
  private subscriptions: Subscription;

  agInit(params: IHeaderParams): void {
    this.params = params;
    this.subscriptions = fromEvent(params.api, 'selectionChanged').subscribe(() =>
      this.checked = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount()
    );
  }

  headerValueChanged(checked: boolean) {
    if (checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
    this.params.api.refreshCells();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
