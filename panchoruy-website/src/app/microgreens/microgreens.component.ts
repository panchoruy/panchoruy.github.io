import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { NewMicrogreenEntryComponent } from '../new-microgreen-entry/new-microgreen-entry.component'
import { PlantNewComponent } from '../plant-new/plant-new.component'
import { PlantDetailsComponent } from '../plant-details/plant-details.component'
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


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
  racksSnapshot: any;

  // Default Rack
  currentRack = "1";
  trayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(
    public firebase: AngularFireDatabase, 
    public auth: AngularFireAuth, 
    public dialog: MatDialog) {
    this.racks = this.firebase.object('racks').valueChanges();
    this.racks.subscribe(event => this.racksSnapshot = event);
    this.updateTrays();
  }

  newCropType() {
    const dialogRef = this.dialog.open(NewMicrogreenEntryComponent, {});
  }

  updateTrays() {
    this.trays = this.firebase.object('racks/' + this.currentRack + '/trays').valueChanges();
  }

  openPlantDetailsDialog(tray_number, crop_id) {
    this.dialog.open(PlantDetailsComponent, {
      width: "80%",
      data: {
        rack_number: this.currentRack,
        tray_number: tray_number,
        crop_id: crop_id
      }
    });   
  }

  openPlantNewDialog(tray_number): void {
    this.dialog.open(PlantNewComponent, { 
      data: {
        rack_number: this.currentRack,
        tray_number: tray_number
      }
    });
  }

  compareNumber(a, b) {
    return a.key - b.key
  }

  buttonValue(tray_value) {
    return this.firebase.object("crops/" + tray_value).valueChanges();
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  ngOnInit(): void {
  }

}