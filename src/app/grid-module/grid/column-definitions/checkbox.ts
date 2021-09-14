import { CheckboxAgCellRendererComponent } from '../cell-renderers';
import { CheckboxAgHeaderRendererComponent } from '../cell-headers';
import { ColId } from '../constants/col-id';

export const checkbox = {
  headerName: '',
  colId: ColId.Checkbox,
  field: 'checkbox',
  width: 40,
  hide: false,
  cellRendererFramework: CheckboxAgCellRendererComponent,
  headerComponentFramework: CheckboxAgHeaderRendererComponent
};
