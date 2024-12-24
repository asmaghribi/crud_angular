import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  form!: FormGroup;
  description!:string;
  id!:string;
  title!:string;
  EventRecupere !: any;
  constructor(
    
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) data:any) {

        this.id = data.id;
        this.title = data.title;
        this.EventRecupere=data.EventRecupere;
      
      }
  
  
  ngOnInit() {
    this.form = this.fb.group({
      
      id: [this.EventRecupere.id,[]],
      title:[this.EventRecupere.title,[]]
  });
  }

  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
  
}
