import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{

  constructor(private http:HttpClient)
   {

    }

    select()
    {
     
    return this.http.get("http://localhost:3434/player");
   }

   delete(id)
   {
    // return null;
     return this.http.delete("http://localhost:3434/player/"+id);
   }

   insert(playerObj)
   {
  //   return null;
     return this.http.post("http://localhost:3434/player",playerObj);
   }
   selectRecordById(id)
   {
     return this.http.get("http://localhost:3434/player/"+id);
   }
  
   update(playerObj)
   {
     console.log(playerObj);
     return this.http.put("http://localhost:3434/player/"+playerObj.id,playerObj);
   }

}
