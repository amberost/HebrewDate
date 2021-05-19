import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HebrewDate } from 'src/app/models/hebrew-date';
import { HebrewDateService } from 'src/app/services/hebrew-date.service';

@Component({
  selector: 'app-gre-to-heb-date',
  templateUrl: './gre-to-heb-date.component.html',
  styleUrls: ['./gre-to-heb-date.component.css']
})
export class GreToHebDateComponent implements OnInit {

  dateForm: FormGroup;

  hebDate: HebrewDate;
  gy: number;
  gm: number;
  gd: number;
  

  constructor( private hebService: HebrewDateService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      gyForm: ["", Validators.required],
      gmForm: ["", Validators.required],
      gdForm: ["", Validators.required],
    })
  }


  public getHebDate(){
    this.hebService.getHebrewDate(this.dateForm.controls['gyForm'].value, this.dateForm.controls['gmForm'].value, this.dateForm.controls['gdForm'].value).subscribe(
      result => this.hebDate = result,
      err => alert("No such date found!")
      )   
  }

  counter(i: number) {
    return new Array(i);
}

  
}










