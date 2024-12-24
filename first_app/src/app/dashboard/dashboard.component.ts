import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { SubjectService } from 'src/services/subject.service';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nb_students: number = 0;
  nb_subjects: number = 0;
  nb_events: number = 0;
  nb_tools: number = 0;
  StudentService: any;

  global:number[]=[];

  constructor(private MS: StudentService,private AS:SubjectService) { }
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: this.getNumber(),
    }
  ];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};



  ngOnInit(): void {
    this.nb_students = this.MS.tab.length;
    this.nb_subjects = this.AS.tabSubject.length;

    for (let i = 0; i < this.nb_students; i++) {
      console.log(this.MS.tab[i]);
      this.chartLabels.push(this.MS.tab[i].name)
    }
   // this.getNumber();

  }

  getNumber(): number[] {
    this.AS.getNbsubjectByStudent().subscribe((x:any) => {
      this.global = x;
    })
    console.log(this.global);
    return this.global;
  }

}
