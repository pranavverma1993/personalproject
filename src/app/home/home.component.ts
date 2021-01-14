import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NameService } from 'src/app/name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageSource: string;
  happy:boolean=false
  sad:boolean=false
  meh:boolean=false
  happymsg:boolean=false;
  sadmsg:boolean=false;
  mehmsg:boolean=false;
  maleSelection:boolean=false
  femaleSelection:boolean=false
  constructor(private routes: Router,private service : AuthService,private nameService: NameService) { }

  get data():string { 
       return this.nameService.NameData; 
    }
    get genderValue():string { 
      return this.nameService.genderName; 
   }

  logout(){
this.service.logout()
}
  ngOnInit() {

     console.log(this.genderValue + "genderValue")
if(this.genderValue=="Female"){
  this.femaleSelection=true
}
 else if (this.genderValue=="Male"){
   this.maleSelection=true
 }



  }
  stayhappy(){
   
    this.happy=true;
    this.meh=false;
    this.sad=false;
    this.happymsg=true;
    this.sadmsg=false;
    this.mehmsg=false;
      document.getElementById('happy1').style.display = "block";
  }
  staymeh(){
   
    this.meh=true;
    this.happy=false;
    this.sad=false;
   this.mehmsg=true;
   this.happymsg=false;
   this.sadmsg=false;
    document.getElementById('meh1').style.display = "block";

  }
  staysad(){
     this.sad=true;
     this.happy=false;
     this.meh=false;
    this.sadmsg=true;
    this.mehmsg=false;
    this.happymsg=false;
  document.getElementById('sad1').style.display = "block";

  }
  game(){
    this.routes.navigateByUrl('/game')
  }

  backtoname(){
    this.routes.navigateByUrl('/name')
  }
}
