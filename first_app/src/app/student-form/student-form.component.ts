import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/modals/Student';
import { StudentService } from 'src/services/student.service';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  currentItemId!:string;
  student_recuperer!:Student;
  constructor(private MS:StudentService, private router:Router ,private activatedRoute:ActivatedRoute){}//Injection des dependances

  ngOnInit(): void {
    //initialisation  du formulaire
    this.initFrom();
    //1. recuperer id a partir de la route
    this.currentItemId=this.activatedRoute.snapshot.params['id'];
    //2. si id existe et a une valeur => je suis dans edit
    if(!!this.currentItemId){
      this.MS.getStudentById(this.currentItemId).then((x)=>{
        this.student_recuperer=x;
          this.initFrom2(x);
      })
    //initForm2(member)
    //else{this.initFrom();}
    }


  }

  form: any=FormGroup;

  Onsub():void{

    console.log(this.form.value);
    const studentTosave={...this.student_recuperer,...this.form.value};
    this.MS.saveStudent(studentTosave).then(()=>{
      this.router.navigate(['/students']);
    });
  }
  initFrom():void{
    this.form=new FormGroup({
     // id:new FormControl(null,[Validators.required]),
      cin:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[Validators.required]),
      classe:new FormControl(null,[Validators.required]),
      filiere:new FormControl(null,[Validators.required]),
     // createDate:new FormControl(null,[Validators.required]),
  })}
  initFrom2(x:Student):void{
    x=this.student_recuperer;
    this.form=new FormGroup({
     // id:new FormControl(null,[Validators.required]),
      cin:new FormControl(x.cin),
      name:new FormControl(x.name),
      classe:new FormControl(x.classe),
      filiere:new FormControl(x.filiere)
     // createDate:new FormControl(null,[Validators.required]),
  })}
}
