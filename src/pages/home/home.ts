import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: Observable<any[]>;
name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private afDB:AngularFireDatabase) {
    // this.items = afDB.list('cuisines').valueChanges();
    this.items = this.afDB.list('cuisines').valueChanges();
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  writeCuisines(){
    this.afDB.list('cuisines').push(this.name);
  }

}
