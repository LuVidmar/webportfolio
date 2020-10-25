import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webportfolio';

  public clicked = false;
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
