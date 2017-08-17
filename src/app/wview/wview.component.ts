import { Component, Input , Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-wview',
  templateUrl: './wview.component.html',
  styleUrls: ['./wview.component.css']
})
export class WViewComponent{

  @Input() wZdata;
  @Input() status;
  @Input() wZdataMore;
  @Output() change :EventEmitter<any> = new EventEmitter<any>();
  model = { id: 1 };
  checked: number[] = [1];
  index : number = 0;
  constructor(private ele:ElementRef) { }

  get debug() { return JSON.stringify(this.model); }
  test(index) :void {
    console.log(index)
    this.change.emit(index);
    console.log(this.ele)
  }
  checkedStatus(id,event) {
    this.index = this.checked.indexOf(id);
    if(event.target.checked) {
        this.checked.push(id);
    } else {
          this.checked.splice(this.index, 1);
    }
    console.log(this.checked);
    this.change.emit(this.checked);
  }
}
