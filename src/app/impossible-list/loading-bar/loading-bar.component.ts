import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  constructor(firestoreService: FirestoreService) { }
  items = [];

  ngOnInit(): void {
    for (let index = 0; index < 100; index++) {
      this.items.push(index);
      
    }
  
  }

}
