import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de-mi',
  templateUrl: './edit-acerca-de-mi.component.html',
  styleUrls: ['./edit-acerca-de-mi.component.css']
})
export class EditAcercaDeMiComponent implements OnInit {
  persona: Persona = new Persona("","","","","","",0,"","");
  
  constructor(private service: PersonaService,private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.detail(id).subscribe(data => {
      this.persona = data;
    }, error => {
      alert("Error al cargar los datos");
    })
  }
  onUpdate(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.update(id, this.persona).subscribe(
      data => {
        alert("Datos Acerca de mi actualizados");
        this.router.navigate(['']);
      }, err => {
        alert("Error al actualizar datos");
        this.router.navigate(['']);
      }
    )
  }


}
