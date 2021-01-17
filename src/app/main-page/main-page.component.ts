import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public clicked = true;
  public icon = 'keyboard_arrow_down';

  //Change bool state
  public nextComponent(){
    this.clicked = !this.clicked;
    if (this.clicked == false){
      this.icon = 'keyboard_arrow_left';
      console.log(this.clicked);
    }
    else {
      this.icon = 'keyboard_arrow_down';
    }
    
  }

}
