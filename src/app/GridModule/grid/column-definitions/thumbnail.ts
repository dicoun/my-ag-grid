import { ThumbnailAgCellRendererComponent } from '../cell-renderers';
import { ColId } from '../constants/col-id';

export const thumbnail = {
  headerName: '',
  field: 'thumbnail',
  colId: ColId.Thumbnail,
  autoHeight: true,
  width: 145,
  cellRendererFramework: ThumbnailAgCellRendererComponent,
};
