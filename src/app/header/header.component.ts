import { Component, OnInit , Input } from '@angular/core';
import { ScrollmasterControllerService } from '../scrollmaster-controller.service'
import * as ScrollMagic from "scrollmagic";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  private controler;
  private headerElement:HTMLElement;
  public scene;
  private DD;


  constructor(private scrollmasterController:ScrollmasterControllerService) { }

  getRealProgress(progress,negativeProgress)
	{
		let reallProgress = progress-negativeProgress,
			multiply = 1/(1-negativeProgress);
		return reallProgress*multiply;
	}

	addEvent(){
		
		let headerParallaxElems = <HTMLElement> this.headerElement.querySelector(".header-content"),
			negativeProgress = 0;
			// navigationScene = new NavigationScene(this.headerElement);


		this.scene.on( "progress" , event => {
			if(this.controler.scrollPos() < headerParallaxElems.offsetTop)
				negativeProgress = event.progress;
			// navigationScene.update(this.controler.scrollPos())

			let progress = this.getRealProgress(event.progress,negativeProgress);
			
			let	space = progress*153;
			
			headerParallaxElems.style.transform = 'translateY('+space+'%)';

		});

	}
  
  hamburger(){

  }

  ngOnInit() {
  	this.controler = this.scrollmasterController.getControler();

	this.headerElement = <HTMLElement>document.querySelector("#header");

	this.scene = new ScrollMagic.Scene({
		triggerElement: this.headerElement,
		offset: 0
		})
		.addTo(this.controler);

	this.DD = this.scrollmasterController.DynamicDuration( this.scene , this.headerElement, "x1.5")
	
	this.addEvent(); 
  }

}
