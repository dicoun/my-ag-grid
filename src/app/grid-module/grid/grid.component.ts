import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from '@ag-grid-community/core';
import { AllModules, MenuItemDef, GetContextMenuItemsParams, GridReadyEvent } from '@ag-grid-enterprise/all-modules';
import { EntityService } from 'src/app/grid-module/services/entity.service';
import { ColId } from './constants/col-id';
import {
  title,
  description,
  published,
  thumbnail,
  checkbox
} from './column-definitions';
import {
  SelectionButtonComponent,
  SelectedRecordsComponent,
  TotalRecordsComponent
} from './side-bar';
import { ItemModel } from 'src/app/grid-module/models/item.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  rowData: Observable<ItemModel[]>;
  modules = AllModules;
  params: any;
  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
    },
    columnDefs: [
      checkbox,
      thumbnail,
      published,
      title,
      description,
    ],
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
    suppressCellSelection: true,
    suppressRowClickSelection: true,
    getContextMenuItems: (params) => this.getContextMenuItems(params),
  };

  statusBar = {
    statusPanels: [
      { statusPanelFramework: SelectionButtonComponent, align: 'left' },
      { statusPanelFramework: SelectedRecordsComponent, align: 'right' },
      { statusPanelFramework: TotalRecordsComponent, align: 'right' }
    ]
  };

  constructor(private entityService: EntityService ) { }

  ngOnInit() {
    this.rowData = this.entityService.get();
  }

  onGridReady(params: GridReadyEvent): void {
    this.params = params;
  }

  getContextMenuItems(params: GetContextMenuItemsParams): (string | MenuItemDef)[] {
    if(params.column.getColId() == ColId.Text){
      const url = this.entityService.getUrlById(params.node.data.videoId);
      return [
        'copy',
        'copyWithHeaders',
        'separator',
        {
          icon: `<span class="ag-icon ag-icon-linked"></span>`,
          name: 'Open in new tab',
          action: () => {
             window.open(url, '_blank');
          }
        }
      ];
    }
    return [
      'copy',
      'copyWithHeaders',
      'separator'
    ];
  }
}
