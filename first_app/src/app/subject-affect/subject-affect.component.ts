import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/modals/Student';
import { SubjectService } from 'src/services/subject.service';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-subject-affect',
  templateUrl: './subject-affect.component.html',
  styleUrls: ['./subject-affect.component.css']
})
export class SubjectAffectComponent {

  constructor(private MS:StudentService,private activatedRoute:ActivatedRoute,private subjectService:SubjectService,private router:Router) { }
  selectedValue:string="" ;
  id_subject:string="" ;
  tabStudent:Student[]=this.MS.tab;
  Add(selectedValue:string):void{
  this.id_subject=this.activatedRoute.snapshot.params["id"]
  this.subjectService.Affect(this.id_subject,selectedValue).then(()=>
  {
    this.router.navigate(['/subjects'])
  })
  }

}
