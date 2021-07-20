import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  currentPath!: string;
  isCurrentPath!: boolean;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.paintCurrentItem();
  }

  paintCurrentItem() {
    this.currentPath = this.location.path(true);
    this.location.subscribe(({ url }) => {
      console.log(url);
    });
  }
}
