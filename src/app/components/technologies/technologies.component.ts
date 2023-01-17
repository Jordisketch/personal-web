import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = ''
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
