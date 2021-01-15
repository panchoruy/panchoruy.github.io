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
  cropsTypesWriteable: AngularFireList<string>;

  constructor(firebase: AngularFireDatabase, public dialogRef: MatDialogRef<NewMicrogreenEntryComponent>) {
    this.cropsTypesWriteable = firebase.list('crop_types');
  }

  ngOnInit(): void {
  }

  pushNewCrop() {
    this.cropsTypesWriteable.push(this.crop_type);
  }

}
