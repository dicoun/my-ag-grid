import { TextAgCellRendererComponent } from '../cell-renderers';
import { ColId } from '../constants/col-id';

export const description = {
  headerName: 'Description',
  colId: ColId.Description,
  field: 'description',
  width: 340,
  autoHeight: true,
  cellStyle: { ' white-space': 'normal', 'line-height': '20px' },
  cellRendererFramework: TextAgCellRendererComponent
};
