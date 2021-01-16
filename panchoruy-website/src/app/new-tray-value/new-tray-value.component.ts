import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFireObject } from '@angular/fire/database';

export class Tray {
	[name: number]: string
}

@Component({
  selector: 'app-new-tray-value',
  templateUrl: './new-tray-value.component.html',
  styleUrls: ['./new-tray-value.component.scss']
})
export class NewTrayValueComponent implements OnInit {

	tray_value: string;
	tray_index: number;
	trays: AngularFireObject<Tray>;

  constructor(
  	public dialogRef: MatDialogRef<NewTrayValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { trays: AngularFireObject<string>, tray_index: number }) {
  	this.trays = data.trays;
  	this.tray_index = data.tray_index;
  }

  ngOnInit(): void {
  }

  updateTray() {
  	this.trays.update({[this.tray_index]: this.tray_value});
  }

}
