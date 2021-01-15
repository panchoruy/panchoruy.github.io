import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMicrogreenEntryComponent } from '../new-microgreen-entry/new-microgreen-entry.component'

@Component({
  selector: 'app-microgreens',
  templateUrl: './microgreens.component.html',
  styleUrls: ['./microgreens.component.scss']
})
export class MicrogreensComponent implements OnInit {

  crop_type: string;

  constructor(public dialog: MatDialog) { }

  newEntry() {
    const dialogRef = this.dialog.open(NewMicrogreenEntryComponent, {
      data: { crop_type: this.crop_type }
    });
  }

  ngOnInit(): void {
  }

}