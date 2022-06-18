import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Show } from './show.model';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  @Input() show: Show;

  @Output() showSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onShowSelected() {
    this.showSelected.emit();
  }
}
