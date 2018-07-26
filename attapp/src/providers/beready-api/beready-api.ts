import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BereadyApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BereadyApiProvider {

    private apiUrl = 'http://webservice.bereadyattend.local/'

  constructor(
      public http: HttpClient
  ) {
    console.log('Hello BereadyApiProvider Provider');
  }

  // This function is used to send update request to webservices
  recordAttendance(registrationDetails) {
      return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl+'recordAttendance.php', JSON.stringify(registrationDetails), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
              .subscribe(res => {
                  resolve(res);
                  console.log(res['message']);
              }, (err) => {
                  reject(err);
              });
      });
  }

  getStudents() {
      return new Promise((resolve, reject) => {
          this.http.get(this.apiUrl+'getStudents.php', {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }

}
