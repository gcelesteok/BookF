import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  
  proyectos: Proyecto = new Proyecto("", "", "", "");


  constructor( private service: ProyectosService,private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.detail(id).subscribe(data => {
      this.proyectos = data;
      
    }, err => {
      alert("Error al cargar proyecto")
      this.router.navigate(['']);
    })
  
  }
  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.update(id, this.proyectos).subscribe(
      data => {
        alert("Proyecto actualizado")
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
