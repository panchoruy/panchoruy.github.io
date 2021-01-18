import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;


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
	crop_history_ref: AngularFireList<{time: number, action: string}>;
	crop_history: MatTableDataSource<any>;
	crop_ref: AngularFireObject<any>;
	crop_id: string;
	age: number;

  constructor(
  	firebase: AngularFireDatabase,
  	public dialogRef: MatDialogRef<PlantDetailsComponent>,
  	private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { rack_number: AngularFireObject<string>, tray_number: number, crop_id: string }) {
  	this.crop_id = data.crop_id;
  	this.tray_number = data.tray_number;
  	this.rack = firebase.object('racks/' + data.rack_number);
    this.crop_ref = firebase.object('crops/' + data.crop_id);
    this.crop = this.crop_ref.valueChanges();
    this.crop.subscribe(crop_data => this.age = ((Date.now() - crop_data.time_planted) / MILLISECONDS_IN_A_DAY) >> 0)
    this.crop_history_ref = firebase.list('crops/' + data.crop_id + "/history", );
    this.crop_history_ref.valueChanges().subscribe(data => this.crop_history = new MatTableDataSource(data.reverse()))
  }

  ngOnInit(): void {
  }

  removeCrop() {
  	this.rack.update({[this.tray_number]: 0});
  	this.crop_ref.update({state: "removed"});
  }

  cancelAndClose(): void {
    this.dialogRef.close();
  }

  handleMist() {
  	this.crop_history_ref.push({ time: Date.now(), action: "mist" });
  	this.notify("Misted!");
  }

	handleWater() {
    this.crop_history_ref.push({ time: Date.now(), action: "water" });
    this.notify("Watered!");
	}

	handleWeight() {
    this.crop_history_ref.push({ time: Date.now(), action: "removed weight" });
    this.crop_ref.update({state: "black-out"});
    this.notify("Removed weight!");
	}

	handleLight() {
    this.crop_history_ref.push({ time: Date.now(), action: "light" });
    this.crop_ref.update({state: "growing"});
    this.notify("Added Light!");
	}

	handleHarvest() {
    this.crop_history_ref.push({ time: Date.now(), action: "harvested" });
    this.rack.update({[this.tray_number]: 0});
    this.crop_ref.update({state: "harvested"});
    this.notify("Harvested!");
	}

	notify(message) {
		this.snackbar.open(message, "Close", {duration: 2000});
	}
}
