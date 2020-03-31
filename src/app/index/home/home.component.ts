import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  constructor(
    private http: HttpService,
    private message: NzMessageService,
  ) {}
  ngOnInit() {
  }

}

