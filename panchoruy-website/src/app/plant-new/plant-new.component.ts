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

	crop_type_value: string;
  seed_amount_value: number;
	tray_number: number;
	rack_number: number;
  rack: AngularFireObject<any>;
  crops: AngularFireList<any>;
  crop_types: Observable<any[]>;

  constructor(firebase: AngularFireDatabase,
  	public dialogRef: MatDialogRef<PlantNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { rack_number: number, tray_number: number }) {
  	this.rack = firebase.object('racks/' + data.rack_number + '/trays');
  	this.tray_number = data.tray_number;
    this.crop_types = firebase.list('crop_types', ref => ref.orderByValue()).valueChanges();
    this.crops = firebase.list('crops');
  }

  ngOnInit(): void {
  }

  updateTray() {
    var crop_ref = this.crops.push({
      crop_type: this.crop_type_value, 
      seed_amount: this.seed_amount_value, 
      time_planted: Date.now(),
      state: "planted",
    });
    var new_crop_id = crop_ref.key;
  	this.rack.update({[this.tray_number]: new_crop_id});
  }

  cancelAndClose(): void {
    this.dialogRef.close();
  }
}
