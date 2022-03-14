import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  personajes: Personaje[] | undefined;
  personajesCopy: Personaje[] |undefined;

  constructor( public http: HttpClient) {
    this.getData();
   }

  async getData(){
    await this.http.get<any>(environment.apiUrl + "/characters")
    .subscribe((res) => {
      this.personajes = res.map(({char_id, name, nickname, img, status, occupation}: Personaje)=> {
        return {
          char_id:char_id,
          name:name,
          nickname:nickname,
          img:img,
          status:status,
          occupation:occupation
        };
      })
      this.personajesCopy=this.personajes;
    });
  } 

  filter(e:any){
    const search : string = e.target.value;
    this.personajes= this.personajesCopy?.filter(({name})=>{
      return name.toLowerCase().includes(search.toLowerCase());
    });
    //console.log({search});   // entre comillas para ver q variable es
  }

}
