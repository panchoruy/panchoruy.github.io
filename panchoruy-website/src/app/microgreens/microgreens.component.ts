import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { NewMicrogreenEntryComponent } from '../new-microgreen-entry/new-microgreen-entry.component'

@Component({
  selector: 'app-microgreens',
  templateUrl: './microgreens.component.html',
  styleUrls: ['./microgreens.component.scss']
})
export class MicrogreensComponent implements OnInit {

  crop_type: string;
  items: Observable<any>;

  constructor(firebase: AngularFireDatabase, public dialog: MatDialog) {
    this.items = firebase.object('items').valueChanges();
  }

  newEntry() {
    const dialogRef = this.dialog.open(NewMicrogreenEntryComponent, {
      data: { crop_type: this.crop_type }
    });
  }

  ngOnInit(): void {
  }

}