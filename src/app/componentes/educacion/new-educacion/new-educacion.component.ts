import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEducacion: string = '';
  descripcionEducacion: string = '';
  institucion: string = '';
  imagenE: string = '';
  


  constructor(private service:EducacionService,private router :Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion, this.institucion, this.imagenE);
    this.service.save(educacion).subscribe(data => {
      alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al crear educación ");
        this.router.navigate(['']);
      }
    )
  }

}
