import {Component, OnInit} from '@angular/core';
import {GeneralService} from "./service/general-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data: any[] = [];

  constructor(private _generalService: GeneralService) {
  }

  ngOnInit() {
    this._generalService.getData()
      .subscribe((item: any) => this.data = item)
  }

}
