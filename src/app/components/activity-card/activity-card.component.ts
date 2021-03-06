import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '@app/models/model';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {
  @Input() public activity: Activity;

  @Output() public addButton = new EventEmitter<Activity>();

  constructor() { }

  ngOnInit() { }

  addActivity(): void {
    this.addButton.emit(this.activity);
  }

}
