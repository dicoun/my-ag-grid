import { DateAgCellRendererComponent } from '../cell-renderers';
import { ColId } from '../constants/col-id';

export const published = {
  headerName: 'Published on',
  colId: ColId.PublishedAt,
  field: 'publishedAt',
  width: 115,
  cellRendererFramework: DateAgCellRendererComponent,
};
