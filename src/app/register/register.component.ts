/*
[(ngModel)]="player.id"
[(ngModel)]="player.Country"

[(ngModel)]="player.Year" 
[(ngModel)]="player.NoofTeam"

[(ngModel)]="player.Venue"



  <div class="form-group">
        <label for="id">id</label>
        <input type="text" class="form-control" id="id"  name="id" placeholder="id" [(ngModel)]="player.id">
    </div>
*/


import { Component, OnInit } from '@angular/core';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
 {
    player=
    {
      "id":"",
      "Country":"",
      "Year":"",
      "NoofTeam":"",
      "Venue":""
    }

    //player:any;

  constructor(private route:ActivatedRoute,private router:Router ,private http:HttpClient,private service:DataService) { }

  ngOnInit() 
  {

  }


  Insert()
  {
    console.log(this.player);
      var obR=this.service.insert(this.player);
      obR.subscribe((result)=>
      {
        console.log(result);
      this.router.navigate(['home']);
      })
  }
}
