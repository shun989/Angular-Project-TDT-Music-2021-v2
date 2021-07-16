import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private http:HttpClient) { }
  fileData:any;

  fileEvent(e: any){
    this.fileData = e.target.files[0];
  }

  onSubmitform(f: NgForm) {

    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('music', this.fileData);
    /* Image Post Request */
    this.http.post('http://localhost:8000/api/upload-file', myFormData, {
      headers: headers
    }).subscribe(res => {
      console.log(res)
    });
  }

  ngOnInit(): void {
  }

}
