import { Firebase } from '@ionic-native/firebase/ngx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
// import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the FcmProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FcmProvider {
  
  constructor(
    public firebaseNative: Firebase,
    public http: Http,
    private platform: Platform
  ) {
      console.log('Hello FcmProvider Provider');
  }

  async getToken() {

    let token : string;

    if (this.platform.is('android')) {
     
      token = await this.firebaseNative.getToken()
      console.log(token);
    } 

    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      const perm = await this.firebaseNative.grantPermission();
    } 
    
    // Is not cordova == web PWA
    if (!this.platform.is('cordova')) {
      // TODO add PWA support with angularfire2
    } 

    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token) {
    if (!token) return;
    // const devicesRef = this.afs.collection('devices')

    // const docData = { 
    //   token,
    //   userId: 'testUser',
    // }

    // return devicesRef.doc(token).set(docData)
  }

  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}
