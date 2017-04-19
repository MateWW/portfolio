import { Component, OnInit , Input , ElementRef , ViewChild , HostListener } from '@angular/core';

import { tween, svgPath } from "popmotion";



@Component({
  selector: 'app-chart',
  template: `
<div class="graph" >
  <svg version="1.1"
        viewBox="0 0 200 200"
         xmlns="http://www.w3.org/2000/svg">
      <path class="circle-path-2"
            d="
               M 100, 100
               m -75, 0
               a 75,75 0 1,0 150,0
               a 75,75 0 1,0 -150,0
               "
            />
      <path #path id="circle-path"
            d="
               M 100, 100
               m -75, 0
               a 75,75 0 1,0 150,0
               a 75,75 0 1,0 -150,0
               "
            />
    </svg>
  <h1 #percentElem ></h1>
</div>
  `,
  styles: [`
     path {
      fill: none;
      stroke-width: 16;
      stroke-opacity: 1;
      stroke:#fdc426;
      transform: rotate(90deg);
      transform-origin: 50% 50%;
    }
    path.circle-path-2{
      stroke:#ffffff;
    }
    .graph{
    margin:0 auto;
    width:60%;
    position:relative;
    
    } 
    h1{
      position:absolute;
      top:50%;
      transform: translateY(-50%);
      left:0;
      font-weight:700;
      width:100%;      
    }
  `]
})
export class ChartComponent implements OnInit {

  @Input()
  percent;

  @ViewChild("path")
  path:ElementRef;

  @ViewChild("percentElem")
  percentLen:ElementRef;


  render(){
    // console.log(this.percentLen)
    let circleChart =  new CircleChart( this.percentLen.nativeElement , this.path.nativeElement);
    circleChart.drawChart(parseInt(this.percent))
  }

  constructor() { }

  ngOnInit() {
    this.render();
  }

}

class CircleChart{

  private circleActor;
  private labelElement;

  constructor(retP,path) {
    var thatCall = this.chartValueUpdated;
    var that = this;

    this.circleActor = svgPath(path); 
    

    this.labelElement = retP;
  }

  drawChart(complete) {
    tween({
      duration: 1200,
      from:0,
      to:complete,

      onUpdate: (output)=>{
        this.circleActor.set('length',output);
        this.chartValueUpdated(output);
      }
    }).start();
    // this.circleActor.start(drawLine);
  }

  chartValueUpdated(output) {
    this.labelElement.textContent = Math.round(output) + '%';
  }
}