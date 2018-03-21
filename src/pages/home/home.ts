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
  oggettiPrestati: OggettoPrestato[] = [];
  oggettoPrestato: OggettoPrestato;
  datiInseriti: OggettoForm;
  constructor(public navCtrl: NavController, private navParams: NavParams, private nativeStorage: NativeStorage, private oggettoServiceProvider: OggettoServiceProvider) {

    this.oggettiPrestati =  [{
      nomeOggetto: 'Libro Piccole donne',
      nomePersona: 'Marco Bellino',
      dataPrestito: '10-03-2018',
      fotoPersona: ['../assets/imgs/libroPiccoleDonne.jpg'],
      restituito: false
    },
    {
      nomeOggetto: 'Barbecue da giardino',
      nomePersona: 'Sophia Loren',
      dataPrestito: '20-08-2017',
      fotoPersona: ['../assets/imgs/barbecue.jpg'],
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
    // this.convertiDati(this.datiInseriti);
  }
  ionViewDidLoad() {
    this.oggettoServiceProvider.prendiOggetto().subscribe(x => this.oggettiPrestati = x)
  }

  AggiungiOggettoPrestato(){
    this.navCtrl.push(FormPage, {
    });
    //this.oggettoServiceProvider.prendiOggetto().subscribe(datiInseriti => this.datiInseriti = datiInseriti);

    const oggettoPrestatoNuovo = new OggettoForm();
    if(this.oggettiPrestati && oggettoPrestatoNuovo){
    // this.oggettiPrestati.push(oggettoPrestatoNuovo);
     this.nativeStorage.setItem('oggettiPrestati', this.oggettiPrestati);
    }
  }
  dettaglioOggetto(object: OggettoPrestato){
    this.navCtrl.push(DettaglioOggettoPage, {
      object: object
    });
  }
  oggettoConsegnato(oggetto: OggettoPrestato){  
    // this.oggettoPrestato.restituito != true; 
    // this.datiInseriti.restituito != true; 
    oggetto.restituito ? oggetto.restituito = false : oggetto.restituito = true;
  }
  oggettoNonConsegnato(oggetto: OggettoPrestato){
    // this.oggettoPrestato.restituito != false;
    // this.datiInseriti.restituito != false; 
    oggetto.restituito ? oggetto.restituito = false : oggetto.restituito = true;
  }
  convertiDati(ogg: OggettoForm){
//oggetto forma a oggettoprestato 
    const oggettoPrestato = {
    nomeOggetto: ogg.nomeOggetto,
    nomePersona: ogg.nomePersona,
    dataPrestito: ogg.dataPrestito,
    fotoPersona: ogg.fotoPersona,
    restituito: false
  }
  return oggettoPrestato;
  }
}