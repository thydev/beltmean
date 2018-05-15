import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pet: any;
  message = '';
  errors = {
    name: '',
    pettype: '',
    description: ''
  } ;

  constructor(
    private _beltService: BeltService,
    private _router: Router
  ) {
    this.clear();
  }

  ngOnInit() {
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

  onSubmit() {
    const obsItem = this._beltService.addNew(this.pet);
    obsItem.subscribe(data => {
      // console.log(data);
      this.message = data['message'];
      if (data['message'] === 'Success') {
        this.message = ': ' + this.pet.name + ' was added!';
        this.clear();
        // this.errors.name = '';
        this.goHome();
      } else {
        console.log(data['error'].errors);
        this.errors = {name: '',
          pettype: '',
          description: ''};
        if (data['error'].errors['name']) {
          this.errors.name = data['error'].errors['name'];
        }
        if (data['error'].errors['pettype']) {
          this.errors.pettype = data['error'].errors['pettype'];
        }
        if (data['error'].errors['description']) {
          this.errors.description = data['error'].errors['description'];
        }
        // this.errors = data['error'].errors;

        // for (const err in data['error'].errors) {
        //   // console.log(err);
        //   if (err) {
        //     this.errors.name = data['error'].errors[err].message;
        //   }
        //   // console.log(err);
        // }

      }
    });
  }

  goHome() {
    this._router.navigate(['/']);
  }

}
