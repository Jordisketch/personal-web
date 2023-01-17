import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent implements OnInit {
  showMore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
