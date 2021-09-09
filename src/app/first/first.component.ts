import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetService } from '../get.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  headers=["Title","Image","Thumbnail"];
  user!:FormGroup;
  getUser: any;
  constructor(private fb: FormBuilder,private service: GetService,private http: HttpClient,private router: Router) { }
  ngOnInit() {
    this.user=this.fb.group({
      title:['Lavendar'],
       imageOne:[''],
      imageTwo:['']
    });
    this.getPhoto();
  }
  getPhoto(){
    this.service.getData().subscribe((res)=>{
      this.getUser=res as Array<Object>;
    })
  }
  return(){
    this.router.navigate(['get-data']);
  }
}
