import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(private service : AuthService , private routes: Router) { }
msg:String;
UserName:any
password:any
condition:boolean=false;
buttonDisabled:boolean=true
@ViewChild('username', {static: true}) nameElementRef:ElementRef
ngAfterViewInit(){
  this.nameElementRef.nativeElement.focus();
  console.log(this.nameElementRef);
}
  ngOnInit() {


  }
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigateByUrl('/name');
    }
    else{
this.msg ='Invalid username or password';
    }
  }

loggedin(){

    
 if(this.UserName.length==0 || this.password.length==0){
  this.buttonDisabled=true


 }
else if(this.UserName.length<5 || this.password.length<5){
  this.buttonDisabled=true
}
else if (this.UserName.length>=5 || this.password.length>=5){
  this.buttonDisabled=false
}
}

}
