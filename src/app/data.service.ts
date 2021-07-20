import { Injectable } from '@angular/core';
import { profile, proyects } from '../data/data';
import { DataProfile, DataProyects } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataProfile: DataProfile;
  dataProyects: DataProyects[];
  constructor() {
    this.dataProfile = profile;
    this.dataProyects = proyects;
  }

  getDataProfile(){
    return this.dataProfile
  }

  getDataProyects(){
    return this.dataProyects
  }
}
