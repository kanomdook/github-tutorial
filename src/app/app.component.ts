import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label = 'Multi Select Box';
  dataList: Array<any> = ['3MWBPL1H-11-BPL1H',
    '3RWTWA1H-11-BPL1H',
    '3MWBPL1H-11-RGTTC',
    'DTN-SSNK1-3SBCBPL1M-X',
    'DTN-SSNK1-3SBCBPL1M-XX1',
    'DTN-SSNK1-3SBCBPL1M-XX2',
    'DTN-SSNK1-3SBCBPL1M-XX3',
    'DTN-SSNK1-3SBCBPL1M-XX',
    'DTN-SSNK1-3SBCBPL1M-XZ',
    'DTN-SSNK1-3SBCBPL1M-XY'];

  selectedList(e) {
    console.log(e);
  }
}
