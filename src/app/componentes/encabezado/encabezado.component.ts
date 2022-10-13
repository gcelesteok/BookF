import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona: Persona = new Persona("","","","","","",0,"","");
  isLogged: boolean = false;
  constructor(public personaService:PersonaService,private tokenService: TokenService) { }
 

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => this.persona = data);
  
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  };

  
  onLogout() {
    this.tokenService.logout();
    window.location.reload();
  }

}
