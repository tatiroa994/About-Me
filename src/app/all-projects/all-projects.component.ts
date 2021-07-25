import { Component, OnInit } from '@angular/core';
import { DataProjects } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
})
export class AllProjectsComponent implements OnInit {
  allProjects!: DataProjects[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.allProjects = this.dataService.getDataProjects();
  }
}
