import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ip: string;
  constructor(private http: Http) {
    this.http.get('http://echo.jsontest.com/key/value/one/two').toPromise()
      .then(res => res.json())
      .then(resJson => {
        this.ip = resJson.one
      })
  }

  ngOnInit() {
  }

}
