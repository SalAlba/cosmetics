import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successfully-end-transaction',
  templateUrl: './successfully-end-transaction.component.html',
  styleUrls: ['./successfully-end-transaction.component.scss']
})
export class SuccessfullyEndTransactionComponent implements OnInit {

  _id = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(d => this._id = d._id);
  }

}
