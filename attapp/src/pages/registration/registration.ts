import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BereadyApiProvider } from "../../providers/beready-api/beready-api";
import {StudentsPage} from "../students/students";

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

      this.BereadyApi.recordAttendance(this.registrationDetails);

      this.navCtrl.push(StudentsPage);
    }
}


