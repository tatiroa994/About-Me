import { Injectable } from '@angular/core';
import { profile, projects } from '../data/data';
import { DataProfile,  DataProjects } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly dataProfile: DataProfile;
  private dataProjects: DataProjects[];

  constructor() {
    this.dataProfile = profile;
    this.dataProjects = projects;
  }

  getDataProfile(){
    return this.dataProfile;
  }

  getDataProjects(){
    return this.dataProjects; 
  }
}
