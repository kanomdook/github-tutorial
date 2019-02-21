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
  ownList: Array<any> = [];
  dataListRight: Array<any> = [];
  keyword: any = '';
  constructor() { }

  ngOnInit() {
    this.dataList.forEach(el => {
      this.dataFilterListLeft.push({
        name: el,
        active: false
      });
    });
    this.ownList = this.dataFilterListLeft;
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
    this.selectedItem = {};
    this.outputEmitter();
  }

  confirmUnselect() {
    this.dataListRight.forEach((el, i) => {
      if (el.active) {
        const filters = this.dataFilterListLeft.filter(item => {
          return item.name === el.name;
        });
        if (filters.length <= 0) {
          el.active = false;
          this.dataFilterListLeft.push(el);
        }
      }
    });

    this.dataFilterListLeft.forEach(el => {
      this.dataListRight.forEach((item, i) => {
        if (el.name === item.name) {
          this.dataListRight.splice(i, 1);
        }
      });
    });
    this.unselectedItem = {};
    this.outputEmitter();
  }

  outputEmitter() {
    this.selectedList.emit(this.dataListRight);
  }

  filter(e) {
    if (e) {
      const reg = new RegExp(e, 'g');
      const datas = this.ownList.filter(el => {
        if (el.name.match(reg) || el.name.match(reg)) {
          return el;
        }
      });
      this.dataFilterListLeft = datas;
    } else {
      this.dataFilterListLeft = this.ownList;
    }
  }
}
