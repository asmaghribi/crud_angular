import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Student } from 'src/modals/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  tab:Student[]= GLOBAL._DB.students;

  constructor(private httpClient:HttpClient) { }
  saveStudent(studentTosave:any):Promise<void>
  {
    //return this.httpClient.post<Member>('link', memberTosave).toPromise();
    const newStudent= {
      ...studentTosave,
      id:studentTosave.id?? (Math.ceil(Math.random()*10000)).toString(),
      Datenaissance:studentTosave.Datenaissance ??  new Date().toISOString()
    };
    this.tab=[newStudent,...this.tab.filter(x=>x.id!=newStudent.id)];
    return new Promise(resolve =>resolve());
  }
  /*updateMember(memberToupdate:any):Promise<void>
  {
    //return this.httpClient.post<Member>('link', memberTosave).toPromise();

  }*/
  deleteStudentById(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise();
    this.tab=this.tab.filter(x=>x.id!=id);
    return new Promise(resolve =>resolve());
  }
  getStudentById(id:string):Promise<Student>{
    //return this.httpClient.get<Member>('link').toPromise();
    return new Promise(resolve =>resolve(
    this.tab.filter(x=>x.id==id)[0]??null
    ));
  }


}
