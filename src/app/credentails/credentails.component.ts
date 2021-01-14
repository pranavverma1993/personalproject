import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NameService } from 'src/app/name.service';
import { AuthService } from 'src/app/auth.service';
interface gender {
  value: string;
 
}
@Component({
  selector: 'app-credentails',
  templateUrl: './credentails.component.html',
  styleUrls: ['./credentails.component.css']
})
export class CredentailsComponent implements OnInit {

  @ViewChild('nameRef', {static: true}) nameElementRef:ElementRef
  buttonDisabled:boolean=true
  dataName:any;
  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }


  value: String;
  searchValue:string = '';
  constructor(private routes: Router,private nameService: NameService,private service : AuthService) { }
  genders: gender[] = [
    {value: 'Male'},
    {value: 'Female'},
    
  ];

  submit(value){
       console.log(value)
    if(value=="Female"){
      console.log(value + "femaleselected")
    }
  if(value=="Male"){
      console.log(value + "maleselected")
     }

     
  }



  ngOnInit() {
  }
  goToHome(){
    this.searchValue = ' ';
this.routes.navigateByUrl("/home")
  }
  
  set data(value: string) { 
       this.nameService.NameData = value; 
     }

set genderValue(value:string){
  this.nameService.genderName = value; 
}


     logout(){
      this.service.logout()
      }

      loggedin(){
        
            
         if(this.dataName.length>=1){
          this.buttonDisabled=false

        }

        if(this.dataName.length==0 ){
          this.buttonDisabled=true
        
        
         }
      }

      clearSearch() {
        this.searchValue = '';
      }
}
