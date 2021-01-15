import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-new-microgreen-entry',
  templateUrl: './new-microgreen-entry.component.html',
  styleUrls: ['./new-microgreen-entry.component.scss']
})
export class NewMicrogreenEntryComponent implements OnInit {

  crop_type: string;
  cropsWriteable: AngularFireList<string>;

  constructor(firebase: AngularFireDatabase, public dialogRef: MatDialogRef<NewMicrogreenEntryComponent>) {
    this.cropsWriteable = firebase.list('crops');
  }

  ngOnInit(): void {
  }

  pushNewCrop() {
    console.log("this is happening");
    this.cropsWriteable.push(this.crop_type);
  }

}
