import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  NameData: string;
  genderName:string;
  constructor() { }
}
