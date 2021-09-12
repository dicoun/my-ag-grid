import { LinkAgCellRendererComponent } from '../cell-renderers';
import { ColId } from '../constants/col-id';

export const title = {
  headerName: 'Video Title',
  colId: ColId.Text,
  field: 'title',
  autoHeight: true,
  cellStyle: { 'white-space': 'normal', 'line-height': '20px' },
  cellRendererFramework: LinkAgCellRendererComponent
};
