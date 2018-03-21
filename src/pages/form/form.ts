import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OggettoForm } from '../../app/models/oggettoForm';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { OggettoServiceProvider } from '../../providers/oggetto-service/oggetto-service';


@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  datiInseriti: OggettoForm = new OggettoForm();
  photos: string[] = [];
  base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private oggettoServiceProvider: OggettoServiceProvider) {
    this.datiInseriti.nomeOggetto = '';
    this.datiInseriti.nomePersona = '';
    this.datiInseriti.dataPrestito = '';
    this.datiInseriti.fotoPersona = [];
    this.datiInseriti.restituito = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
  salvaDati(){
    //this.navCtrl.push(HomePage,{
    //this.navCtrl.push(this.oggettoServiceProvider.addOggetto(this.datiInseriti),{
   //   datiInseriti: this.datiInseriti
   // });
    // this.oggettoServiceProvider.addOggetto(this.datiInseriti);
    this.oggettoServiceProvider.addOggetto(this.datiInseriti);
    this.navCtrl.pop();
  }
  scattaFoto(){
     const options: CameraOptions = {
       quality: 50,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
       sourceType: 0
    }
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
      this.datiInseriti.fotoPersona.push(this.base64Image);    
    }, (err) => {
      console.log(err);
    });
  }
  deletePhoto(index){
    this.photos.splice(index, 1);
  }
}
