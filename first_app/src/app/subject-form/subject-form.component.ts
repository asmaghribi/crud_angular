import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/modals/Subject';
import { SubjectService } from 'src/services/subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent {
  currentItemId!:string;
  subject_recuperer!:Subject;
  constructor(private MS:SubjectService, private router:Router ,private activatedRoute:ActivatedRoute){}//Injection des dependances

  ngOnInit(): void {
    //initialisation  du formulaire
    this.initFrom();
    //1. recuperer id a partir de la route
    this.currentItemId=this.activatedRoute.snapshot.params['id'];
    //2. si id existe et a une valeur => je suis dans edit
    if(!!this.currentItemId){
      this.MS.getSubjectById(this.currentItemId).then((x)=>{
        this.subject_recuperer=x;
          this.initFrom2(x);
      })
    //initForm2(member)
    //else{this.initFrom();}
    }


  }

  form: any=FormGroup;

  Onsub():void{

    console.log(this.form.value);
    const subjectTosave={...this.subject_recuperer,...this.form.value};
    this.MS.saveSubject(subjectTosave).then(()=>{
      this.router.navigate(['/subjects']);
    });
  }

  initFrom():void{
    this.form=new FormGroup({
     // id:new FormControl(null,[Validators.required]),
     type:new FormControl(null,[Validators.required]),
     title:new FormControl(null,[Validators.required]),
     datedebut:new FormControl(null,[Validators.required]),
     sourcePdf:new FormControl(null,[Validators.required]),
     professeur:new FormControl(null,[Validators.required]),
     // createDate:new FormControl(null,[Validators.required]),
  })}
  initFrom2(x:Subject):void{
    x=this.subject_recuperer;
    this.form=new FormGroup({
     // id:new FormControl(null,[Validators.required]),
     type:new FormControl(x.type),
      title:new FormControl(x.title),
      datedebut:new FormControl(x.datedebut),
      sourcePdf:new FormControl(x.sourcePdf),
      professeur:new FormControl(x.professeur)

     // createDate:new FormControl(null,[Validators.required]),
  })}
}

