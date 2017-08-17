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
  testdata:String = '';
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
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {

    console.log('Step3 - Next');
    console.log(this.dataa)
    var footer = document.querySelectorAll('div.card-footer button');
    footer[2].setAttribute("style", "display: none;");
    //This way we can access data and assign it to the view after calculation 
    this.testdata = this.dataa.firstStep+'Testing here';
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
  }
  thirdStep(event) {
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
  }
}
