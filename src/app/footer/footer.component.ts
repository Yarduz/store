import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icons: any = document.getElementsByClassName('bi');
  arr: any = Array.from(this.icons)
  fake: any = document.getElementById("fake");
  hid: boolean = false;

  constructor() { }

  ngOnInit(): void { }
  iconClick() {
    this.hid = true;
    setTimeout(() => {
      this.hid = false
    }, 1500);
  }
}

