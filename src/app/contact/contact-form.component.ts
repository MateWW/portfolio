import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  template: `
    <form (onSubmit)="test()">
        <fieldset>
          <input (ngModel)="test()" type="text" placeholder="Full Name">
          <input (ngModel)="test()" type="email" placeholder="Email">
          <input (ngModel)="test()" type="tel" placeholder="Number">
          <textarea (ngModel)="test()" placeholder="Write your Message here.."></textarea>
          <button type="submit" (ngModel)="test()">SUBMIT</button>
        </fieldset>
      </form>
  `,
  styles: [
    `input{
        font-family:"Raleway",sans-serif;
        color:#ffffff;
        width:100%;
        padding:.75rem .75rem;
        margin-top:1rem;
        font-size:1.125rem;
        background:RGBA(0,0,0,0);
        border:1px solid #ffffff;
        text-align:center;
      }
      textarea{
        font-family:"Raleway",sans-serif;
        color:#ffffff;
        background:RGBA(0,0,0,0);
        border:1px solid #ffffff;
        margin-top:1rem;
        width:100%;
        min-height:160px;
        font-size:0.9375;
        padding:.75rem;
      }
      button{
        background:#fdc426;
        color:#ffffff;
        font-size:1.25rem;
        padding:.5rem 0;
        font-weight:700;
        cursor:pointer;
        border:0;
        transition:all .3s;
        width:100%;
      }
      button:hover{
          color:#333333;
        }
      `
  ]
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  test(){
    console.log(123);
  }

  ngOnInit() {
  }

}
