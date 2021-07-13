import { Component, OnInit } from '@angular/core';
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;

  constructor (){

    this.uploader = new FileUploader({
      // url: URL,
      disableMultipart: true, // 'DisableMultipart' phải là 'true' để formatDataFunction được gọi.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item: { _file: { name: any; size: any; type: any; }; }) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe( res => this.response = res );
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit(): void {
  }


}
