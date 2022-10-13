import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string = '';
  imgProyecto: string = '';
  descripcion: string = '';
  url: string = '';

  constructor(private service: ProyectosService,  private router: Router) { }

  ngOnInit(): void {

  }
  onCreate(): void {
    const proyectos = new Proyecto(this.nombre,this.imgProyecto, this.descripcion, this.url);
    this.service.save(proyectos).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
