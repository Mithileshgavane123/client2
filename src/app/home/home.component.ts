import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  players: any;

  constructor(public service:DataService)
   { }

  ngOnInit()
   {
     let obsResult=this.service.select();
      obsResult.subscribe((result)=>
      {
        console.log(result);
        this.players=result;
      })
    }

}
