import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title:string='';
  img:string='';
  thumbnailImg:string='';
  constructor(private http: HttpClient, private data:GetService) {}

  ngOnInit() {
      this.title=this.data.gettitle();
      this.img=this.data.getfimg();
      this.thumbnailImg=this.data.getsimg();
  }
}
