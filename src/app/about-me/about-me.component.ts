import { Component, OnInit } from '@angular/core';
import { Skill } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  urlSkills: Skill[];
  aboutMe: string | undefined;
  constructor(private dataService: DataService) {
    this.urlSkills = [];
  }

  ngOnInit(): void {
    this.aboutMe = this.dataService.getDataProfile()['about me'];
 
    this.urlSkills= [...this.dataService.getDataProfile().skills]
    console.log(this.urlSkills);
    
  }
}
