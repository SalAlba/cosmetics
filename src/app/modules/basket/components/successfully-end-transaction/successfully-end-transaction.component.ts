import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-successfully-end-transaction',
  templateUrl: './successfully-end-transaction.component.html',
  styleUrls: ['./successfully-end-transaction.component.scss']
})
export class SuccessfullyEndTransactionComponent implements OnInit {

  _id = 0;
  totalPrice = 0;
  email = environment.helpEmail;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(d => this._id = d._id);
    // this._id = this.route.snapshot.queryParams.registered || false;
    this.totalPrice = this.route.snapshot.queryParams.totalPrice || 0;
  }

}
