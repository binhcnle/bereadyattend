import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BereadyApiProvider } from "../../providers/beready-api/beready-api";
import { StudentsPage } from "../students/students";
import { RequestOptions } from '@angular/common/http';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

    private registrationDetails = { name: '', sid: '' };

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private BereadyApi: BereadyApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

    registerNewStudent () {
      console.log('attempt to register new student');
      console.log('Name ' + this.registrationDetails.name);
      console.log('Student ID ' + this.registrationDetails.sid);

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      const requestOptions = new RequestOptions({ headers: headers });
  
      let postData = {
              "name": "Customer004",
              "email": "customer004@email.com",
              "tel": "0000252525"
      }
  
      this.http.post("http://127.0.0.1:3000/customers", postData, requestOptions)
        .subscribe(data => {
          console.log(data['_body']);
         }, error => {
          console.log(error);
        });
    }
    }
}


