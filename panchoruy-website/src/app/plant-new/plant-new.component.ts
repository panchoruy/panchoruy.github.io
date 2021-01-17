import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

export class Tray {
	[name: number]: string
}

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.scss']
})
export class PlantNewComponent implements OnInit {

	tray_value: string;
	tray_index: number;
	trays: AngularFireObject<Tray>;
  crop_types: Observable<any[]>;

  constructor(firebase: AngularFireDatabase,
  	public dialogRef: MatDialogRef<PlantNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { trays: AngularFireObject<string>, tray_index: number }) {
  	this.trays = data.trays;
  	this.tray_index = data.tray_index;
    this.crop_types = firebase.list('crop_types', ref => ref.orderByValue()).valueChanges();
  }

  ngOnInit(): void {
  }

  updateTray() {
  	this.trays.update({[this.tray_index]: this.tray_value});
  }

  cancelAndClose(): void {
    this.dialogRef.close();
  }

}
