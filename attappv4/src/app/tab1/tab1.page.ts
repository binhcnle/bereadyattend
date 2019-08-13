import { Component, OnInit } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../types';
import { Observable } from 'rxjs';
import { Tab2Page } from '../tab2/tab2.page';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  private attendanceDetails = { name: '', sid: '' };
  private baseUrl = "http://webservice.bereadyattend.local/recordAttendance.php";
  

  constructor(public httpClient: HttpClient) {

  }
  ngOnInit() {

  }

  public  recordAttendance() {

    console.log('attempt to register new student');
    console.log('Name ' + this.attendanceDetails.name);
    console.log('Student ID ' + this.attendanceDetails.sid);

    var finalUrl = this.baseUrl + "?name=" + this.attendanceDetails.name + "&sid=" + this.attendanceDetails.sid;

    console.log(finalUrl);

    return this.http.post(finalUrl, "", httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
    
    //this.navCtrl.push(Tab2Page, {});
    }
    


}
