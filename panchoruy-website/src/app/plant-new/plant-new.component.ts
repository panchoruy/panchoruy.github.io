import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.scss']
})
export class PlantNewComponent implements OnInit {

  seed_amount_value: number;
  tray: AngularFireObject<any>;
  crops: AngularFireList<any>;
  crop_types: Observable<any>;
  firebase: AngularFireDatabase;

	crop_type = { key: null, value: { pre_soak: false } };

  constructor(
    firebase: AngularFireDatabase,
  	public dialogRef: MatDialogRef<PlantNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { rack_number: number, tray_number: number }) {
  	this.tray = firebase.object('racks/' + data.rack_number + "/" + data.tray_number);
    this.crop_types = firebase.object('crop_types').valueChanges();
    this.crops = firebase.list('crops');
    this.firebase = firebase;
  }

  ngOnInit(): void {
  }

  updateTray() {
    const state = this.crop_type.value.pre_soak ? "pre-soak" : "planted";
    const now = Date.now();
    var crop_ref = this.crops.push({
      crop_type: this.crop_type.key, 
      seed_amount: this.seed_amount_value, 
      time_planted: now,
      state: state,
    });
    var new_crop_id = crop_ref.key;
    this.firebase.list('crops/' + new_crop_id + "/history").push({time: Date.now(), action: state});
  	this.tray.update({
      crop_id: new_crop_id,
      time_planted: now,
      crop_type: this.crop_type.key,
    });
  }

  cancelAndClose(): void {
    this.dialogRef.close();
  }
}
