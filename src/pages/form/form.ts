import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OggettoForm } from '../../app/models/oggettoForm';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  datiInseriti: OggettoForm = new OggettoForm();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datiInseriti.nomeOggetto = '';
    this.datiInseriti.nomePersona = '';
    this.datiInseriti.dataPrestito = '';
    this.datiInseriti.fotoPersona = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
  salvaDati(){
    this.navCtrl.push(HomePage,{
      datiInseriti: this.datiInseriti
    });
  }
}
