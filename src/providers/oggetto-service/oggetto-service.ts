import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OggettoForm } from '../../app/models/oggettoForm';
import { OggettoPrestato } from '../../app/models/oggettoPrestato';
import { FormPage } from '../../pages/form/form';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OggettoServiceProvider {
  //datiInseriti: OggettoForm = new OggettoForm();
   private arrayOggetti: OggettoForm[];
  constructor() {
    this.arrayOggetti = [];
    console.log('Hello OggettoServiceProvider Provider');
  }
  prendiOggetto(): Observable<OggettoForm[]> {
    //return of(this.datiInseriti);
    return of(this.arrayOggetti);
  }
   addOggetto(ogg: OggettoForm){
     this.arrayOggetti.push(ogg);
    }
}
