import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-candidates',
  templateUrl: './edit-candidates.component.html',
  styleUrls: ['./edit-candidates.component.css']
})
export class EditCandidatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    jQuery('.modal').modal({complete: () => this.router.navigate(['/dashboard'])});
    jQuery('.modal').modal('open');
  }

}
