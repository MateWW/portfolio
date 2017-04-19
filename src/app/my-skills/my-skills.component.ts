import { Component, AfterViewInit , ElementRef , ViewChild , ViewChildren , EventEmitter, Output } from '@angular/core';
import * as ScrollMagic from "scrollmagic";
import { ScrollmasterControllerService } from '../scrollmaster-controller.service';
import { ChartComponent } from "./chart.component";

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements AfterViewInit {
  
  // @Output("ref")
  public ref = new EventEmitter();


  @ViewChild("mySkillsRow")
  scrollElement:ElementRef;

  @ViewChildren(ChartComponent)
  chartComponent;

  private scene;

  constructor( private scrollmasterController : ScrollmasterControllerService) { }

  ngAfterViewInit() {

  	this.scene = new ScrollMagic.Scene({
				triggerElement: this.scrollElement.nativeElement,
				offset:-100, 
				duration:100
			})
			.addTo(this.scrollmasterController.getControler());

	this.scrollmasterController.DynamicDuration( this.scene , this.scrollElement.nativeElement);

	

	this.addEvents();
  }

  addEvents(){

		this.scene.on( "enter" , event => {
		  this.chartComponent.forEach( (p) => p.render() );;

		  this.scrollElement
		   .nativeElement
		   .classList
		   .add( "animate-visible" );

		});

		this.scene.on( "leave" , event => {
		  this.scrollElement
		   .nativeElement
		   .classList
		   .remove( "animate-visible" );

		});

	}

}
