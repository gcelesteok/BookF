import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educaciones: Educacion[]=[];

  constructor(private service:EducacionService,private tokenService:TokenService) { }
  
  isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    this.tokenService.getToken()? this.isLogged = true : this.isLogged = false;
  }
  cargarEducacion(): void{
    this.service.lista().subscribe(data => {
      this.educaciones = data;
    });
  }
  delete(id?: number){
    if(id != undefined && confirm("¿Seguro quieres eliminar esta información?")){
      this.service.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          alert("Educacion eliminada")
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }
}
