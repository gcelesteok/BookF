import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[]=[];
 
  constructor(private service: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  cargarProyectos(): void {
    this.service.lista().subscribe(data => {
      this.proyectos = data;
    });
  }
  delete(id?: number){
    if(id != undefined && confirm("¿Seguro quieres eliminar esta información?")){
      this.service.delete(id).subscribe(
        data => {
          this.cargarProyectos();
          alert("Proyecto eliminado")
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
