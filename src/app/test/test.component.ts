import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ip = '';
  constructor(private http: Http) { 
    this.http.get('http://ip.jsontest.com/').toPromise()
    .then(res=>res.json())
    .then(resJson => {
      this.ip = resJson.ip
    })
  }

  ngOnInit() {
  }

}
