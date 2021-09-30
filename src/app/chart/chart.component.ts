import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import {ContractCreatedEvent} from './../models/event.model'
import {ContractTerminatedEvents} from './../models/event.model'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  months =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12 ]
  ContractCreatedEvents : ContractCreatedEvent[] = []
  ContractTerminatedEvents : ContractTerminatedEvents[] = [];
  numberOfContracts: number[] = [];
  constructor(private httpservice: HttpService) {}

 async ngOnInit() {
     this.ContractCreatedEvents = await this.httpservice.getContractsStarted();
     this.ContractTerminatedEvents =  await this.httpservice.getContractsTerminated();
    for (let index = 0; index < 12; index++) {
      const eachMonthCount = this.ContractCreatedEvents.filter(event  =>  new Date(event.startDate).getMonth() == index).length;
      const eachMonthTerminated =  this.ContractTerminatedEvents.filter(event => new Date(event.terminationDate).getMonth() == index).length;

      this.numberOfContracts.push(eachMonthCount - eachMonthTerminated)
    }
  }

  getHeight(month: number) {
    let styles = {};

    styles = {'height': `${this.numberOfContracts[month - 1]}px`};
    return styles;
  }
}
