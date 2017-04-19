import { Injectable } from '@angular/core';
import * as ScrollMagic from "scrollmagic";

let controler = new ScrollMagic.Controller();

@Injectable()
export class ScrollmasterControllerService {

	private controler;
	private scene;
	private elem:HTMLElement;
	private amount;

	constructor() { 
		this.controler = controler;
	}

	getControler(){
		return this.controler;
	}

  	getsize()
	{
		return parseInt( window.getComputedStyle( this.elem ).height);
	}

	setDuration(){
		if(typeof this.amount === "string")
		{	
			this.amount.trim();

			if(this.amount[0] === "x"){
				this.amount =+this.amount.slice(1, this.amount.length);
				this.scene.duration( this.getsize() * this.amount );
			}

			return;
		}
		this.scene.duration( this.getsize() + this.amount );
	}

	addEvent(){
		window.addEventListener( "resize" , event =>{

			this.setDuration();
			
		});
	}

	DynamicDuration( scene , elem, amount?){

		this.elem = elem
		this.scene = scene;

		this.amount = amount || 400;

		this.setDuration()

		this.addEvent();

	}

}