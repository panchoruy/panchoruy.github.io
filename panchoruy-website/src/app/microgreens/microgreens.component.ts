import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { NewMicrogreenEntryComponent } from '../new-microgreen-entry/new-microgreen-entry.component'
import { NewTrayValueComponent } from '../new-tray-value/new-tray-value.component'

export class Rack {
  trays: {
    [name: string]: string
  };
}

@Component({
  selector: 'app-microgreens',
  templateUrl: './microgreens.component.html',
  styleUrls: ['./microgreens.component.scss']
})
export class MicrogreensComponent implements OnInit {

  crop_types: Observable<any[]>;
  racks: Observable<any>;
  racksRef: AngularFireObject<Rack>;
  trays: Observable<any>;
  firebase: AngularFireDatabase;
  traysSnapshot: any;

  // Default Rack
  currentRack = "1";
  trayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(firebase: AngularFireDatabase, public dialog: MatDialog) {
    this.firebase = firebase;
    this.racksRef = this.firebase.object('racks');
    this.racksRef.snapshotChanges().subscribe(event => this.traysSnapshot = event);
    this.racks = this.racksRef.valueChanges();
    this.crop_types = this.firebase.list('crop_types', ref => ref.orderByValue()).valueChanges();
    this.updateTrays();
  }

  newCropType() {
    const dialogRef = this.dialog.open(NewMicrogreenEntryComponent, {});
  }

  newTrayValueDialog(rack_number, tray_index) {
    this.openDialogWithTrays(this.traysSnapshot.payload.child(rack_number + "/trays").ref, tray_index)
  }

  updateTrays() {
    console.log('racks/' + this.currentRack + '/trays');
    this.trays = this.firebase.object('racks/' + this.currentRack + '/trays').valueChanges();
  }

  openDialogWithTrays(trays, tray_index): void {
    this.dialog.open(NewTrayValueComponent, { 
      data: {
        trays: trays,
        tray_index: tray_index
      }
    });
  }

  compareNumber(a, b) {
    return a.key - b.key
  }

  ngOnInit(): void {
  }

}