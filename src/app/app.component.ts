import { Component, OnInit} from '@angular/core';
import { data, stepData, stepData3, stepData4, tableData} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  private name: Object = {};
  private stepData: Object = {};
  private setpData2: Object = {};
  private stepDatamore: Object = {};
  private tmoreData: Object = {};
  private inValid:boolean = false;
  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  dataa: any = {
    firstStep: 1,
    secondStep : 1,
    thirdStep : [1]
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
    console.log(this.dataa)
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
    console.log(data)
  }

  onStep3Next(event) {

    console.log('Step3 - Next');
    console.log(event);
    console.log(this.dataa)
  }

  onComplete(event) {
    this.isCompleted = true;

  }

  onStepChanged(step) {
    console.log('in on');
  }
  ngOnInit() {
    this.name = data;
    this.stepData = stepData;
    this.setpData2 = stepData3;
    this.inValid = true;
    this.stepDatamore = stepData4;
    this.tmoreData = tableData;

  }
  firstStep(event) {
    console.log('firstStep')
    this.dataa.firstStep = event;
  }

  secondStep(event) {
    console.log('secondStep')
    this.dataa.secondStep = event;
    console.log(this.dataa)
  }
  thirdStep(event) {
    console.log('in main')
    console.log(this.dataa);
    console.log(event)
    if(event.length === 0) {
      this.inValid = false;
      var x = document.getElementsByClassName("nav-item");
      x[3].classList.add("disabled");
      x[3].classList.remove("enabled");
    }
    else {
      this.inValid = true;
      var x = document.getElementsByClassName("nav-item");
      x[3].classList.remove("disabled");
    }
    this.dataa.thirdStep = event;
    console.log(this.dataa);
  }
}
