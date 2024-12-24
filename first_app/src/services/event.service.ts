import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private httpClient:HttpClient) { }

  tab_evt:any[]=GLOBAL._DB.Event;
  Event_recuperer!:Event;

  getAllEvt():any //par defaut va retourner un objet de type observable
  {
    //this.httpClient.get<Event[]>
    //('http://localhost:8080/api/Event');

    return this.tab_evt;
  }

  saveEvent(EventToSave:any): Observable<Event>{
    const NewEvent = {...EventToSave,// ... : extraction des attributs
    id : EventToSave.id ?? Math.ceil(Math.random()*1000).toString(),//ceil=>arrondi
  };
  this.tab_evt=[NewEvent,...this.tab_evt.filter
    (item=>item.id!=NewEvent.id)]

    return new Observable((observer)=>
    observer.next(NewEvent));

  //return 
  //this.httpClient.post<Event>
  //('http://localhost:8080/api/Events',NewEvent);
  }

  deleteEventById(id:string):Promise<void>
  {
    //return this.httpClient.delete<void>('link').toPromise() 
    //link : 127.0.0.1:8080/id

    this.tab_evt=this.tab_evt.filter(item=>item.id!=id);
    return new Promise(resolve => resolve());
  }

  //getEventById(id:string):Promise<Event>
  //{
    //return new Promise (resolve =>resolve
      //(this.tab_evt.filter(item=>item.id==id) [0] ?? null));
  //}
  getEventByID(id:string):Observable<Event>
  {
    return new Observable((observer)=>
    {
      observer.next(
        this.tab_evt.filter(item=>item.id==id)[0]??null
      )
    })
  }
}
