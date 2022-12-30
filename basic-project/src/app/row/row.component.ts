import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
  @Input() feedBack:any;
  @Input() rowData :any;
  visible :boolean=false;
  constructor(){

  }
  showFeedBack(){
    this.visible =!this.visible;
  }
  

}
