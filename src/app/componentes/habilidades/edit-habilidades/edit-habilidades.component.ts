import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  habilidades: Habilidad = new Habilidad("", 0);

  constructor(private service:HabilidadService,private activatedRouter: ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.detail(id).subscribe(
      data => {
        this.habilidades = data;
      }, err => {
        alert("Error al cargar skill");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.update(id, this.habilidades).subscribe(
      data => {
        alert("Skill actualizada")
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar skill");
        this.router.navigate(['']);
      }
    )
  }

}
