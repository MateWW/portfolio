import { Component, AfterContentInit , ElementRef , ViewChild , Renderer2 , Input  , ViewChildren , HostListener} from '@angular/core';
import { ScrollmasterControllerService } from '../scrollmaster-controller.service';
import { tween } from 'popmotion';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterContentInit {

  @ViewChild('headerNav') 
    headerNavbar:ElementRef;

  @ViewChild('contentNav')
    contentNavbar:ElementRef;

  @ViewChild("hamburgerButton")
    hamburgerButton:ElementRef;


  @HostListener('window:resize')
  onResize(){
    if(this.isHamburgerButtonVisible())
      this.hamburgerIsVisible = false;
    else 
      this.hamburgerIsVisible = true;
  }


  @Input("hostElement")
    header;

  @Input("scene")
    scene;

  hamburgerIsVisible = true;

  isHamburgerButtonVisible(){
    return window.getComputedStyle(this.hamburgerButton.nativeElement).display !== 'none' ? true : false;
  }

  hamburgerClick(){
    this.hamburgerIsVisible = !this.hamburgerIsVisible;
  }

  getOffsetTop( elem ){
    return parseInt(window.getComputedStyle( elem ).height);
  }

  background( offset ){
    if( (this.getOffsetTop(this.header)-100) < offset ){
      this.rd.addClass(this.contentNavbar.nativeElement,"content-nav-background");
    }
    else
    {
       this.rd.removeClass(this.contentNavbar.nativeElement,"content-nav-background");
    }
  }

  update(offsetTop){

    let logo = this.contentNavbar.nativeElement.querySelector("figure"),
      navs = this.contentNavbar.nativeElement.querySelectorAll("nav");

    this.background(offsetTop);
    

    if(this.getOffsetTop( this.headerNavbar.nativeElement )>offsetTop)
    {  
      
      this.rd.setStyle(this.contentNavbar.nativeElement, 'display', "none");

      setTimeout(()=>{
        
        logo.classList.add("left-nav-hidden");

        for( let nav of navs ){
          nav.classList.add("right-nav-hidden");
        }
      });
    }
    else
    {
      this.rd.setStyle(this.contentNavbar.nativeElement, 'display', "block");
      setTimeout(()=>{
        logo.classList.remove("left-nav-hidden");
        for( let nav of navs ){
          nav.classList.remove("right-nav-hidden");
        }
      },10)
      
    }

  }


  constructor( private rd : Renderer2, private scrollmasterController : ScrollmasterControllerService ) { }

  ngAfterContentInit() {
    this.onResize();

    this.scene.on("progress", event =>{
      this.update( this.scrollmasterController.getControler().scrollPos() );
    });
  }

}
