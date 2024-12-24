import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/modals/Student';
import { StudentService } from 'src/services/student.service';
import { GLOBAL } from '../app-config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  constructor(private MS: StudentService,private dialog:MatDialog) { }

  dataSource=new MatTableDataSource(this.MS.tab);
  displayedColumns: string[] = ['id', 'cin', 'name', 'Datenaissance','classe','filiere','actions'];
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
        this.MS.deleteStudentById(id).then(()=>{
          this.dataSource .data= this.MS.tab;

      });}
    //3. if retour confirm


  });
    }
}
