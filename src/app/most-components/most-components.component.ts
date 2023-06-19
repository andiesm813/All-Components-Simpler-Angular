import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-most-components',
  templateUrl: './most-components.component.html',
  styleUrls: ['./most-components.component.scss']
})
export class MostComponentsComponent implements OnInit {
  public value = '3';
  public value1 = '4';
  public value2 = '5.5';
  public date = new Date('2023-06-19T00:00');
  public northwindEmployees: any = null;
  public financialBoxOfficeRevenue: any = null;
  public value3 = 'Has Content';
  public date1: any;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('BoxOfficeRevenueType').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
