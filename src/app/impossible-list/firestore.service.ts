import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
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

}

export function createThing(done: boolean, title: string, desc: string, img: string){
  var thing: thingToDo = {done,title,desc,img};
  return thing;
}