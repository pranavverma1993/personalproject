import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { FeelComponent } from './feel/feel.component';
import { RockpaperComponent } from 'src/app/rockpaper/rockpaper.component';
import { CredentailsComponent } from 'src/app/credentails/credentails.component';


const routes: Routes = [
  { path: "", component : LoginComponent,canActivate : [AuthGuard] },
  { path: "home", component : HomeComponent,canActivate : [AuthGuard] },
  { path: "feel", component : FeelComponent,canActivate : [AuthGuard] },
  { path: "game", component : RockpaperComponent,canActivate : [AuthGuard] },
  { path: "name", component : CredentailsComponent,canActivate : [AuthGuard] },
  { path: "login", component : LoginComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
