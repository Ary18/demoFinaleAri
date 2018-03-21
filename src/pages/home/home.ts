import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { OggettoPrestato } from '../../app/models/oggettoPrestato';
import { DettaglioOggettoPage } from '../dettaglio-oggetto/dettaglio-oggetto';
import { FormPage } from '../form/form';
import { OggettoForm } from '../../app/models/oggettoForm';
import { OggettoServiceProvider } from '../../providers/oggetto-service/oggetto-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // buttonColor: string = '#ffffff';
  oggettiPrestati: OggettoPrestato[] = [];
  oggettoPrestato: OggettoPrestato;
  datiInseriti: OggettoForm;
  constructor(public navCtrl: NavController, private navParams: NavParams, private nativeStorage: NativeStorage, private oggettoServiceProvider: OggettoServiceProvider) {

    this.oggettiPrestati =  [{
      nomeOggetto: 'Libro Piccole donne',
      nomePersona: 'Marco Bellino',
      dataPrestito: '10-03-2018',
      fotoPersona: '/Users/useracd04/Desktop/Week06/Day02/demoFinaleAri/demoFinale/src/assets/imgs/libroPiccoleDonne.jpg ',
      restituito: false
    },
    {
      nomeOggetto: 'Barbecue da giardino',
      nomePersona: 'Sophia Loren',
      dataPrestito: '20-08-2017',
      fotoPersona: '/Users/useracd04/Desktop/Week06/Day02/demoFinaleAri/demoFinale/src/assets/imgs/barbecue.jpg',
      restituito: true
    }];

    this.nativeStorage.getItem('oggettiPrestati')
    .then(
      data => this.oggettiPrestati = data,
      error => {
        console.log(error);
      }
    );
    
    this.datiInseriti = this.navParams.get('datiInseriti');
  }

  AggiungiOggettoPrestato(){
    this.navCtrl.push(FormPage, {
    });
    this.oggettoServiceProvider.prendiOggetto().subscribe(datiInseriti => this.datiInseriti = datiInseriti);

    const oggettoPrestatoNuovo = new OggettoForm();
    if(this.oggettiPrestati && oggettoPrestatoNuovo){
     this.oggettiPrestati.push(oggettoPrestatoNuovo);
     this.nativeStorage.setItem('oggettiPrestati', this.oggettiPrestati);
    }
  }
  dettaglioOggetto(object: OggettoPrestato){
    this.navCtrl.push(DettaglioOggettoPage, {
      object: object
    });
  }
  oggettoConsegnato(){
    // this.buttonColor = '#34b505';  
    this.oggettoPrestato.restituito != true; 
    this.datiInseriti.restituito != true; 
  }
  oggettoNonConsegnato(){
    // this.buttonColor = '#f24343'; 
    this.oggettoPrestato.restituito != false;
    this.datiInseriti.restituito != false; 
  }
}
