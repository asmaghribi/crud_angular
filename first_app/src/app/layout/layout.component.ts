import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';
import { ModalProfileComponent } from '../modal-profile/modal-profile.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor(private authService: AuthService,private router:Router,private ngZone:NgZone,private dialog:MatDialog){}

  LOGOUT():void{
    this.authService.doLogout().then(()=>{
      this.router.navigate(['/login'])
    });

  }
  user:any;
  ngOnInit(): void {
    this.authService.getUserClaims().then((u)=>{this.user=u}) //obervable ->subscribe  promise ->then
    console.log(this.user.displayName);
  }
  open() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        username:this.user.displayName,
        photo:this.user.photoURL,
    };

    this.dialog.open(ModalProfileComponent, dialogConfig);
}
}
