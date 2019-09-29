import { Component } from '@angular/core';
import { Company, Service } from '../services/party-event.service';

@Component({
  selector: 'app-party-event',
  providers: [Service],
  templateUrl: './party-event.component.html',
  styleUrls: ['./party-event.component.css']
})
/** party-event component*/
export class PartyEventComponent {

  companies: Company[];
  labelLocation: string;
  readOnly: boolean;
  showColon: boolean;
  minColWidth: number;
  colCount: number;
  width: any;

  constructor(service: Service) {
    this.labelLocation = "top";
    this.readOnly = false;
    this.showColon = true;
    this.minColWidth = 300;
    this.colCount = 2;
    this.companies = service.getCompanies();
    /** party-event ctor */

  }
}
