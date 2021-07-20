import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  isHome!: boolean;
  isAboutMe!: boolean;
  isProjects!: boolean;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.validatePaths(this.location.path(true));
    this.location.subscribe(({ url }) => this.validatePaths(url));
  }

  validatePaths(url: string | undefined): void {
    if (url === '#home') {
      this.isAboutMe = false;
      this.isHome = true;
      this.isProjects = false;
    } else if (url === '#about-me') {
      this.isAboutMe = true;
      this.isHome = false;
      this.isProjects = false;
    } else if (url === '#projects') {
      this.isAboutMe = false;
      this.isHome = false;
      this.isProjects = true;
    }
  }
}
