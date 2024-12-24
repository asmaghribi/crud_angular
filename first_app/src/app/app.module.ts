import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ToolComponent } from './tool/tool.component';
import { SubjectComponent } from './subject/subject.component';
//import { MatData } from '@angular/material/table';
//import { ConfirmComponent } from './confirm/confirm.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectAffectComponent } from './subject-affect/subject-affect.component';
import{MatSelectModule} from '@angular/material/select';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { EventCreateComponent } from './event-create/event-create.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ModalComponent } from './modal/modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { StudentFormComponent } from './student-form/student-form.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    EventComponent,
    ToolComponent,
    SubjectComponent,
    SubjectFormComponent,
    SubjectAffectComponent,
    LoginComponent,
    EventCreateComponent,
    ModalComponent,
    ModalProfileComponent
    //ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    FirebaseModule,
    MatCardModule,
    //MatTableDataSource,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    NgChartsModule,
    Ng2SmartTableModule

  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
