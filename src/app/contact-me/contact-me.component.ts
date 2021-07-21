import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  gitHub!: string;
  linkedin!: string;
  email!: string;
  cv!: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const dataContact = this.dataService.getDataProfile();
    this.gitHub = dataContact.gitHub;
    this.linkedin = dataContact.linkedin;
    this.email = dataContact.email;
    this.cv = dataContact.cv;
  }

  redirectTo(option: string) {
    // const options = {
    //   gitHub: this.gitHub,
    //   linkedin: this.linkedin,
    //   cv: this.cv,
    // };
    // const url = options[option];

    let url = '';

    switch (option) {
      case 'gitHub':
        url = this.gitHub;
        break;
      case 'linkedin':
        url = this.linkedin;
        break;
      case 'cv':
        url = this.cv;
        break;
    }
    window.open(url);
  }
}
