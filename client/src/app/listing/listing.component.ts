import { Component, OnInit } from '@angular/core';
import {BeltService} from '../belt.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  pets: any;
  petdetail: any;
  petToEdit: any;

  constructor(
    private _beltService: BeltService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const obsItem = this._beltService.getAll();
    obsItem.subscribe(data => {
      this.pets = data['data'];
    });
  }

}
