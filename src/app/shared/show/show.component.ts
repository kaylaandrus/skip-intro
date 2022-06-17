import { Component, Input, OnInit } from '@angular/core';
import { Show } from './show.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
