import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[]=[];
  constructor(private service: HabilidadService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  cargarSkills(): void{
    this.service.lista().subscribe(
      data => {
        this.habilidades = data;
      }
    )
  }
  delete(id?: number){
    if(id != undefined && confirm("¿Seguro quieres eliminar esta información?")){
      this.service.delete(id).subscribe(
        data => {
          this.cargarSkills();
          alert("Habilidad eliminada")
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
