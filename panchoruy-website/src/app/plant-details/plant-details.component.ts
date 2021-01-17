import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {

	tray_number: number;
	rack_number: number;
	rack: AngularFireObject<any>;
	crop: Observable<any>;
	crop_id: string;

  constructor(firebase: AngularFireDatabase,
  	public dialogRef: MatDialogRef<PlantDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { rack_number: AngularFireObject<string>, tray_number: number, crop_id: string }) {
  	this.rack = firebase.object('racks/' + data.rack_number + '/trays');
  	this.crop_id = data.crop_id;
    this.crop = firebase.object('crops/' + data.crop_id).valueChanges();
  	this.tray_number = data.tray_number;
  }

  ngOnInit(): void {
  }

  removeCrop() {
  	this.rack.update({[this.tray_number]: 0});
    this.dialogRef.close();
  }

  cancelAndClose(): void {
    this.dialogRef.close();
  }

}
