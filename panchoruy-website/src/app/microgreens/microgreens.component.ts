import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { NewMicrogreenEntryComponent } from '../new-microgreen-entry/new-microgreen-entry.component'
import { PlantNewComponent } from '../plant-new/plant-new.component'
import { PlantDetailsComponent } from '../plant-details/plant-details.component'
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { mergeMap, map } from 'rxjs/operators';


export class Rack {
  [rack_number: number]: {
    [tray_number: number]: {
      crop_type: string,
      time_planted: Date,
      crop_id: string,
    }
  };
}

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;


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
  racks_with_details: Observable<any>;

  // Default Rack
  currentRack = "1";
  ages = {};

  constructor(
    public firebase: AngularFireDatabase, 
    public auth: AngularFireAuth, 
    public dialog: MatDialog) {
    this.racks = this.firebase.object('racks').valueChanges();
    this.racks.subscribe(racks => {
      Object.values(racks).forEach((trays: Rack) => {
        Object.values(trays).forEach(tray => {
          if (tray != 0) {
            this.ages[tray.crop_id] = ((Date.now() - tray.time_planted) / MILLISECONDS_IN_A_DAY) >> 0;
          }
        });
      });
    });
    this.updateTrays();
  }

  newCropType() {
    const dialogRef = this.dialog.open(NewMicrogreenEntryComponent, {});
  }

  updateTrays() {
    this.trays = this.firebase.object('racks/' + this.currentRack).valueChanges();
  }

  openPlantDetailsDialog(tray_number, crop_id) {
    this.dialog.open(PlantDetailsComponent, {
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