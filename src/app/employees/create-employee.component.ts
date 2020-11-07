import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Compiler } from '@angular/core';
import{Employee} from '../models/employee.model';
import{Department} from '../models/department.model';
import{FormsModule} from '@angular/forms';
import { ChangeDetectorRef, AfterContentChecked} from '@angular/core';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  departments:Department[] =[
    {id:1, name:'help desk'},
    {id:2, name:'hr'},
    {id:3, name:'IT'},
    {id:4, name:'payroll'}
  ]
  employee:Employee= {id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
    password:null,
    confirmPassword:null
  }
  
  
    //constructor(private _compiler: Compiler,) { this._compiler.clearCache();}
  
  constructor(
    private cdref: ChangeDetectorRef) { }
  
    ngAfterContentChecked() {
  
      this.cdref.detectChanges();
  
    }
  
 
  
togglePhotoPreview(){
  this.previewPhoto = !this.previewPhoto;
}
  ngOnInit(): void {
  }

  saveEmployee(newemployee: Employee){
 console.log(newemployee);
  }

  id: number;
    name: string;
    gender: string;
    email:string = '';
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
    password:string;
    confirmPassword: string;
  
   
}
