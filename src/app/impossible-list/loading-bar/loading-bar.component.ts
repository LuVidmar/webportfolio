import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  list;
  constructor(firestoreService: FirestoreService) {
    this.list = firestoreService.getList();
  }

  ngOnInit(): void {  
  }

  scrollTo(n: number){
    document.getElementById(n.toString()).scrollIntoView();
  }

}
