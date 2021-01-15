import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  crop_type: string;
}

@Component({
  selector: 'app-new-microgreen-entry',
  templateUrl: './new-microgreen-entry.component.html',
  styleUrls: ['./new-microgreen-entry.component.scss']
})
export class NewMicrogreenEntryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewMicrogreenEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
