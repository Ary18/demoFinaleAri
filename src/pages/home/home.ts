import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { OggettoPrestato } from '../../app/models/oggettoPrestato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oggettiPrestati: OggettoPrestato[] = [];
  oggettoPrestato: OggettoPrestato;
  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {
    this.nativeStorage.getItem('oggettiPrestati')
    .then(
      data => this.oggettiPrestati = data,
      error => {
        console.log(error);
        this.setOggettiPrestati();
      }
    );
  }
  AggiungiOggettoPrestato(){
    const oggettoPrestatoNuovo = new OggettoPrestato();
    if(this.oggettiPrestati && oggettoPrestatoNuovo){
      this.oggettiPrestati.push(oggettoPrestatoNuovo);
      this.nativeStorage.setItem('oggettiPrestati', this.oggettiPrestati);
    }
  }
  setOggettiPrestati(){
    this.oggettiPrestati =  [{
      nomeOggetto: 'Libro Piccole donne',
      nomePersona: 'Marco Bellino',
      dataPrestito: '10/03/2018',
      fotoPersona: ' '
    },
    {
      nomeOggetto: 'Barbecue da giardino',
      nomePersona: 'Sophia Loren',
      dataPrestito: '20/08/2017',
      fotoPersona: ' '
    }];
  }
}
