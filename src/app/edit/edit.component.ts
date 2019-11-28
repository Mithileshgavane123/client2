import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 

  player:any;
  //  {
  //  "id":"",
  //  "Country":"",
  //  "Year":"",
  //  "NoofTeam":"",
  //  "Venue":""
  //  };
  
  constructor(private route:ActivatedRoute,private service:DataService,private router:Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>
    {
      let id=result.get("id");

      console.log(id);
      let obsRes=this.service.selectRecordById(id);
         

      obsRes.subscribe((result1)=>
      {
        this.player=result1[0];
        console.log(this.player);
      })

    })
  
  }


  Update()
  {
    console.log(this.player);
  let res=this.service.update(this.player);
      res.subscribe((result3)=>
      {
        console.log(result3);
        this.router.navigate(['home']);
      })  
}

}