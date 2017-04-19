import { Component, OnInit } from '@angular/core';
import * as ScrollMagic from "scrollmagic";
import { ScrollmasterControllerService } from "../scrollmaster-controller.service"

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  private controler;
  private rows;
  private scene;


  constructor( private scrollmasterController: ScrollmasterControllerService ) { }

  ngOnInit() {

	this.controler = this.scrollmasterController.getControler();
	let scrollElement = document.querySelector("#about_me");

	this.rows = scrollElement.querySelectorAll("#about_me .row");


	this.scene = new ScrollMagic.Scene({
		triggerElement: scrollElement,
		offset:-100,
		duration:100
	}).addTo(this.controler);

	this.scrollmasterController.DynamicDuration(this.scene, scrollElement);

	this.addEvents();

  }
  addEvents(){
		this.scene.on( "enter" , event => {

			let delay = 300,
				index = 1;

			for(let row of this.rows){
				setTimeout(() => {
					row.querySelector(".left").classList.remove("left-hidden");
					row.querySelector(".right").classList.remove("right-hidden");
				}, delay*index)
				index++;
			}

		});
		this.scene.on( "leave" , event => {
			for(let row of this.rows){
				row.querySelector(".left").classList.add("left-hidden");
				row.querySelector(".right").classList.add("right-hidden");
			}
		});
	}

}
