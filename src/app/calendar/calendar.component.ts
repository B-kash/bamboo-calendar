import {Component, OnInit} from '@angular/core';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import {startOfDay} from 'date-fns';
import {colors} from '@angular/cli/utilities/color';

export interface State {
  view: CalendarView;
  events: CalendarEvent[];
  viewDate: Date;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  CalendarView = CalendarView;
  state: State;

  constructor() {
  }

  ngOnInit(): void {
    this.state = {
      view: CalendarView.Month,
      events: [{
        start: startOfDay(new Date()),
        title: 'An event with no end date',
        color: {primary: '#45135', secondary: '#65631'},
        actions: [],
      }],
      viewDate: new Date()
    };
  }

  setView(type: CalendarView) {
    this.state.view = type;
  }

  getTitle(): string {
    return;
  }
}
