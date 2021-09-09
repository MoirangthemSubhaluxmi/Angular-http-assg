import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetService } from '../get.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  user!: FormGroup;
  getUser: any;
  first:any;
  second:any;
  mesg:boolean=false;
  constructor(private fb: FormBuilder, private service: GetService, private http: HttpClient, private router: Router) {
  }

  fromAssetsFolder: any;

  ngOnInit() {
    this.user = this.fb.group({
      title: ['',Validators.required],
      imageOne: ['',Validators.required],
      imageTwo: ['',Validators.required]
    });
  }
  
  submitForm() {
    this.service.settitle(this.user.value.title);
    this.service.setfimg(this.first);
    this.service.setsimg(this.second);
    this.service.saveinput(this.user.value);
    this.mesg=true;
    this.user.reset({});
  }
  closemsg(){
    this.mesg=false;
  }
  fromJson() {
    this.service.getData().subscribe((res) => {
      this.getUser = res;
    })
    this.router.navigate(['json-data']);
  }
  fromSystem(){
    this.router.navigate(['show-data']);
  }
  form(){
    this.router.navigate(['get-data']);
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.first = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  readUrl2(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.second = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
