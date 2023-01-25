import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  displayBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  SMC() {
    this.displayBtn = true;
    setTimeout(() => {
      this.displayBtn = false;
    }, 4000);
  }

}
