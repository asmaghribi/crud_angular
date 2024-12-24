import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from 'src/services/event.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ModalComponent } from '../modal/modal.component';
///data source
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  EventGlobal:any;
    constructor(private ES: EventService , private dialog: MatDialog) { }
    dataSource:Event[]=(this.ES.tab_evt);
    displayedColumns: string[] = ['id', 'titre', 'date_deb', 'date_fin'];

    //filter
   // dataSource = new MatTableDataSource(this.MS.tab);


   /* //delete
    onDelete(id:string):void{
      //1. open la boite
      const dialogRef = this.dialog.open(ConfirmDialogComponent,{width: '500px'});


      //2. attendre le retour
      dialogRef.afterClosed().subscribe((x) => {
        if(x){
          this.MS.deleteMemberById(id).then(()=>{
            this.dataSource .data= this.MS.tab;

        });}
      //3. if retour confirm


    });
      }
  }*/





}
