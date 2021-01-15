import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { NewMicrogreenEntryComponent } from '../new-microgreen-entry/new-microgreen-entry.component'

@Component({
  selector: 'app-microgreens',
  templateUrl: './microgreens.component.html',
  styleUrls: ['./microgreens.component.scss']
})
export class MicrogreensComponent implements OnInit {

  crop_types: Observable<any[]>;

  constructor(firebase: AngularFireDatabase, public dialog: MatDialog) {
    this.crop_types = firebase.list('crop_types', ref => ref.orderByValue()).valueChanges();
  }

  newCropType() {
    const dialogRef = this.dialog.open(NewMicrogreenEntryComponent, {});
  }

  ngOnInit(): void {
  }

}