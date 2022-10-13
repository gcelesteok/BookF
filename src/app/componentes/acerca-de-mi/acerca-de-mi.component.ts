import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
 
  persona: Persona= new Persona("", "", "", "", "", "", 0, "", "");
  
  constructor(private tokenService: TokenService,public service: PersonaService) { }
  isLogged = false;
  ngOnInit(): void {
    this.service.getPersona().subscribe(data=>{
      this.persona= data
      this.tokenService.getToken() ? this.isLogged= true:this.isLogged= false;
    }, error => {
      alert("Error al cargar informacion");
    });
  }
  
}
