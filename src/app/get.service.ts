import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  constructor(private http: HttpClient) { }

  
  getData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
  saveinput(user:any) {
    this.http
      .post('https://jsonplaceholder.typicode.com/photos',user).subscribe((res)=>{
      console.log(res);
      });
  }
  title:string='';
  img:string='';
  thumbnailImg:string='';

  settitle(title:string){
    this.title=title;
  }
  setfimg(img:string){
    this.img=img;
  }
  setsimg(thumbnailImg:string){
    this.thumbnailImg=thumbnailImg;
  }

  gettitle(){
    return this.title;
  }
  getfimg(){
    return this.img;
  }
  getsimg(){
    return this.thumbnailImg;
  }
}
