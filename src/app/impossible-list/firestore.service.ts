import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  items: Observable<any[]>;
  firestore: AngularFirestore;
  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
    this.items = firestore.collection('thingsToDo').valueChanges();
  }

  getList(){
    return this.items;
  }
}

export interface thingToDo{
  done: boolean;
  title: string;
  desc: string;
  img: string;
  number: number;
}

export function createThing(done: boolean, title: string, desc: string, img: string, number: number){
  var thing: thingToDo = {done,title,desc,img,number};
  return thing;
}