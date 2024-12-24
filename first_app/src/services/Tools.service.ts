import { Injectable } from "@angular/core";
import { GLOBAL } from "src/app/app-config";
import { Tool } from "src/modals/Tool";

@Injectable({
    providedIn: 'root'
  })
  
export class ToolService{
    tab:any[]=GLOBAL._DB.tools;
}
