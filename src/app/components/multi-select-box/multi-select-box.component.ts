import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-multi-select-box',
  templateUrl: './multi-select-box.component.html',
  styleUrls: ['./multi-select-box.component.css']
})
export class MultiSelectBoxComponent implements OnInit, AfterViewChecked {
  @Input() label: String = 'Multi Select Box';
  @Input() dataList: Array<any> = [];
  @Output() selectedList = new EventEmitter();

  selectedItems: Array<any> = [];
  selectedItem: any = {};
  unselectedItem: any = {};
  dataFilterListLeft: Array<any> = [];
  dataListRight: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.dataList = ['3MWBPL1H-11-BPL1H',
      '3RWTWA1H-11-BPL1H',
      '3MWBPL1H-11-RGTTC',
      'DTN-SSNK1-3SBCBPL1M-X',
      'DTN-SSNK1-3SBCBPL1M-XX1',
      'DTN-SSNK1-3SBCBPL1M-XX2',
      'DTN-SSNK1-3SBCBPL1M-XX3',
      'DTN-SSNK1-3SBCBPL1M-XX',
      'DTN-SSNK1-3SBCBPL1M-XZ',
      'DTN-SSNK1-3SBCBPL1M-XY'];
    this.dataList.forEach(el => {
      this.dataFilterListLeft.push({
        name: el,
        active: false
      });
    });
  }

  ngAfterViewChecked() {

  }

  selected(item, i) {
    this.selectedItem = item;
    this.dataFilterListLeft.forEach(el => {
      if (el.name === this.selectedItem.name) {
        if (this.selectedItem.active) {
          el.active = false;
        } else {
          el.active = true;
        }
      }
    });
  }

  unselected(item, i) {
    this.unselectedItem = item;
    this.dataListRight.forEach(el => {
      if (el.name === this.unselectedItem.name) {
        if (this.unselectedItem.active) {
          el.active = false;
        } else {
          el.active = true;
        }
      }
    });
  }

  confirmSelect() {
    this.dataFilterListLeft.forEach((el, i) => {
      if (el.active) {
        const filters = this.dataListRight.filter(item => {
          return item.name === el.name;
        });
        if (filters.length <= 0) {
          el.active = false;
          this.dataListRight.push(el);
        }
      }
    });

    this.dataListRight.forEach(el => {
      this.dataFilterListLeft.forEach((item, i) => {
        if (el.name === item.name) {
          this.dataFilterListLeft.splice(i, 1);
        }
      });
    });
  }
}
