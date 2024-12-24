import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Inject } from '@angular/core';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent {

  v1: string;
  v2: any;

  constructor(private dialogRef: MatDialogRef<ModalProfileComponent>, @Inject(MAT_DIALOG_DATA) data:any){
    this.v1 = data.username;
    this.v2 = data.photo;
  }

  close() {
    this.dialogRef.close();
}

}
