import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ToolService } from 'src/services/Tools.service';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit{
  constructor(private TS: ToolService) {
   // const dataSource=new MatTableDataSource(this.TS.tab);
  }
  ngOnInit(){
    this.TS.tab
  }

settings = {
  delete: {
    confirmDelete: true,
    deleteButtonContent: 'Delete',
    saveButtonContent: 'save',
    cancelButtonContent: 'cancel'
  },
  add: {
    confirmCreate: true,
  },
  edit: {
    confirmSave: true,
  },
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
    },
    date: {
      title: 'date',
    },
    source: {
      title: 'source',
    },
  },
};

data = [
  this.TS.tab
];

onDeleteConfirm(event:any) {
  console.log("Delete Event In Console")
  console.log(event);
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
}

onCreateConfirm(event: any) {
  console.log("Create Event In Console")
  console.log(event);

}

onSaveConfirm(event: any) {
  console.log("Edit Event In Console")
  console.log(event);
}
}

