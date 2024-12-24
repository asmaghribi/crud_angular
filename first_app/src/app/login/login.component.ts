import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthSer: AuthService, private router:Router,private ngZone:NgZone){}

  GOOGLE():void{
    this.AuthSer.doGoogleLogin().then(()=>{
      this.succesRedirect()
    });

  }
  succesRedirect():void{
    this.ngZone.run(()=>{
      this.router.navigate(['/member']);

    })
  }
}
