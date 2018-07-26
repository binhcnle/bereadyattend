import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BereadyApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BereadyApiProvider {

    private apiUrl = 'http://bereadyattend.local/'

  constructor(
      public http: HttpClient
  ) {
    console.log('Hello BereadyApiProvider Provider');
  }

  registerNewStudent(registrationDetails) {
      return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl+'registerNewStudent.php', JSON.stringify(registrationDetails), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
              .subscribe(res => {
                  resolve(res);
                  console.log(res['message']);
              }, (err) => {
                  reject(err);
              });
      });
  }

}
