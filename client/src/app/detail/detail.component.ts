import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pet: any;
  isLike = false;

  constructor(
    private _beltService: BeltService,
    private _route: ActivatedRoute,
    private _router: Router) {
      this.clear();
    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params['id']);
    });
  }

  getPet(id: string) {
    const obsItem = this._beltService.getOne(id);
      obsItem.subscribe(data => {
        if (data['message'] === 'Success') {
          this.pet = data['data'][0];
        } else {
          console.log(data);
        }
      });
  }

  onLikes() {
    // this.isLike = true;
    console.log('clicked');
    const obsItem = this._beltService.vote(this.pet._id);
    obsItem.subscribe(data => {
      if (data['message'] === 'Success') {
        this.pet = data['data'];
        this.isLike = true;
        console.log('reloaded');
      } else {
        console.log(data);
      }
    });
  }
  onAdopt() {
    const obsItem = this._beltService.delete(this.pet._id);
    obsItem.subscribe(data => {
      console.log(data);
      this.goHome();
    });
  }

  clear() {
    this.pet = { name: '',
      pettype: '',
      description : '',
      skill1: '',
      skill2 : '',
      skill3 : ''
    };
  }

  goHome() {
    this._router.navigate(['/']);
  }

}
