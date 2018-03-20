import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OggettoPrestato } from '../../app/models/oggettoPrestato';

/**
 * Generated class for the DettaglioOggettoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettaglio-oggetto',
  templateUrl: 'dettaglio-oggetto.html',
})
export class DettaglioOggettoPage {
  private object: OggettoPrestato;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.object = this.navParams.get('object');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettaglioOggettoPage');
  }

}
