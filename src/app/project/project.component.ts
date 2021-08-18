import { Component, Input, OnInit } from '@angular/core';
import { DataProjects } from '../data.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
@Input() project!: DataProjects
  constructor() {     
    
  }

  ngOnInit(): void {
  }
}
