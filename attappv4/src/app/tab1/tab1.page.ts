import { Component, OnInit } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Attendance } from '../types';
import { Observable } from 'rxjs';
import { Tab2Page } from '../tab2/tab2.page';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  private attendanceDetails = { name: '', sid: '' };
  private baseUrl = "http://webservice.bereadyattend.local/recordAttendance.php";
  
  constructor(public httpClient: HttpClient,public router: Router) {

  }
  ngOnInit() {

  }

  public  recordAttendance() {

    console.log('attempt to register new student');
    console.log('Name ' + this.attendanceDetails.name);
    console.log('Student ID ' + this.attendanceDetails.sid);

    var finalUrl = this.baseUrl + "?name=" + this.attendanceDetails.name + "&sid=" + this.attendanceDetails.sid;

    console.log(finalUrl);

    this.httpClient.get(finalUrl).subscribe((response) => {
      console.log(response);
    });
    
    this.router.navigateByUrl('/tabs/tab2');

    return ""; 
    //this.navCtrl.push(Tab2Page, {});
    }
    


}
