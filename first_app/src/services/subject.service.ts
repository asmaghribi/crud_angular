import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../modals/Student';
import { StudentService } from './student.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from '../modals/Subject';
import { GLOBAL } from 'src/app/app-config';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  tabSubject: Subject[] = GLOBAL._DB.subjects;
  count: number = 0;
  x: number[] = [];
  constructor(private httpClient: HttpClient, private MS: StudentService) { }

  saveSubject(subjectTosave: any): Promise<void> {
    //return this.httpClient.post<Member>('link', memberTosave).toPromise();
    const newSubject = {
      ...subjectTosave,
      id: subjectTosave.id ?? (Math.ceil(Math.random() * 10000)).toString(),
      datedebut: subjectTosave.datedebut ?? new Date().toISOString()
    };
    this.tabSubject = [newSubject, ...this.tabSubject.filter(x => x.id != newSubject.id)];
    return new Promise(resolve => resolve());
  }
  /*updateMember(memberToupdate:any):Promise<void>
  {
    //return this.httpClient.post<Member>('link', memberTosave).toPromise();

  }*/
  deleteSubjectById(id: string): Promise<void> {
    //return this.httpClient.delete<void>('link').toPromise();
    this.tabSubject = this.tabSubject.filter(x => x.id != id);
    return new Promise(resolve => resolve());
  }
  getSubjectById(id: string): Promise<Subject> {
    //return this.httpClient.get<Member>('link').toPromise();
    return new Promise(resolve => resolve(
      this.tabSubject.filter(x => x.id == id)[0] ?? null
    ));
  }

  getNbsubjectByStudent(): Observable<number[]> {

    for (let i = 0; i < this.MS.tab.length; i++) {

      for (let j = 0; j < this.tabSubject.length; j++) {
        if (this.MS.tab[i].name == this.tabSubject[j].professeur) {
          this.count++;
        }
      }
      this.x.push(this.count);
    }
    return new Observable(observer => observer.next(this.x))
  }
  VG!: Student;
  Affect(id_subject: string, selectedValue: string): Promise<void> {
    this.MS.getStudentById(selectedValue).then((student) => { this.VG = student });
    this.getSubjectById(id_subject).then((x) => { x.professeur = this.VG.name });
    return new Promise(resolve => resolve());

  }

}
