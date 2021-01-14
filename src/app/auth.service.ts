import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private routes: Router) { }
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "admin" && pwd =="admin"){
sessionStorage.setItem('username',"admin");

return true;
}
else{
  return false;
}
  }

logout(){
  sessionStorage.removeItem("username");
  this.routes.navigateByUrl("/login");
}

}
