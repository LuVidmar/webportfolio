import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './firestore.service';

@Component({
  selector: 'app-impossible-list',
  templateUrl: './impossible-list.component.html',
  styleUrls: ['./impossible-list.component.scss']
})

export class ImpossibleListComponent implements OnInit {

  list;
  constructor(firestoreService: FirestoreService) {
    this.list = firestoreService.getList();
  }

  ngOnInit(): void {
    
  }

}