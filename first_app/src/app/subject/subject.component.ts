import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectService } from 'src/services/subject.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  constructor(private MS: SubjectService,private dialog:MatDialog) { }
  dataSource=new MatTableDataSource(this.MS.tabSubject);
  displayedColumns: string[] = ['id', 'title', 'type', 'datedebut','sourcePdf','professeur','actions'];
  //filter
 // dataSource = new MatTableDataSource(this.MS.tab);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }
  //delete
  onDelete(id:string):void{
    //1. open la boite
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{width: '500px'});


    //2. attendre le retour
    dialogRef.afterClosed().subscribe((x) => {
      if(x){
        this.MS.deleteSubjectById(id).then(()=>{
          this.dataSource .data= this.MS.tabSubject;

      });}
    //3. if retour confirm


  });
    }

}
