import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {
  global: any = '';
  dateTime: any = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.global = '';
    this.dateTime = '';
    this.http.get('https://api.covid19api.com/summary').pipe(map(data => {
      this.global = data['Global'];
      const respDateTime = new Date(data['Date']);
      this.dateTime = respDateTime.toUTCString();
    })).subscribe(result => {
        result;
    });
  }

  numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

}
