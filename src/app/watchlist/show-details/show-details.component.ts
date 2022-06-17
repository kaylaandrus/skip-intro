import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  @Input() show: Show;

  constructor() { }

  ngOnInit(): void {
  }

}
