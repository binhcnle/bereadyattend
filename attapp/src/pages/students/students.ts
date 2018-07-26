import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BereadyApiProvider } from "../../providers/beready-api/beready-api";

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

    // this to declare a student variable which can be used to store student list later on
    public students: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private BereadyApi: BereadyApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentsPage');

    this.BereadyApi.getStudents().then(data => this.students = data)
  }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        this.BereadyApi.getStudents().then(data => this.students = data)

        refresher.complete();
    }

}
