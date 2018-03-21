import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OggettoForm } from '../../app/models/oggettoForm';
import { OggettoPrestato } from '../../app/models/oggettoPrestato';
import { FormPage } from '../../pages/form/form';

@Injectable()
export class OggettoServiceProvider {
  datiInseriti: OggettoForm = new OggettoForm();
  constructor(public http: HttpClient) {
    console.log('Hello OggettoServiceProvider Provider');
  }
  prendiOggetto(): OggettoPrestato[] {
    return
  }
}
