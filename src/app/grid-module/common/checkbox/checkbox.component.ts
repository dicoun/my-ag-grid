import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() selected: boolean;
  @Output() valueChanged = new EventEmitter<boolean>();

  onCheckboxValueChanged(checkedValue: boolean) {
    const isSelected = checkedValue;
    this.valueChanged.emit(isSelected);
  }

}
