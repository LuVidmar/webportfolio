import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webportfolio';

  public clicked = false;

  //Change bool state
  public nextComponent(){
    this.clicked = !this.clicked;
    console.log('patas');
  }

}
