import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private router:Router,
              private service:DataService,
              private route:ActivatedRoute
              ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe((result)=>{
      let observableResult = this.service.delete(result.get("id"));
      observableResult.subscribe((record)=>{
        console.log(record);
        this.router.navigate(['/home']);
      })
    })
    
  }

}
