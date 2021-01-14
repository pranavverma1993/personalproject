import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { FeelComponent } from './feel/feel.component';
import { RockpaperComponent } from './rockpaper/rockpaper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 import {MatButtonModule} from '@angular/material/button';
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatCardModule} from '@angular/material/card';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 import {MatToolbarModule} from '@angular/material/toolbar';

import { CredentailsComponent } from './credentails/credentails.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeelComponent,
    RockpaperComponent,
    CredentailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,  BrowserAnimationsModule,MatInputModule,MatIconModule,MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
