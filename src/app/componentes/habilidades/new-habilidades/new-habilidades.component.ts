import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {
  
  habilidad: string = '';
  alcance: number= 0;
  
  constructor(private service: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const skill = new Habilidad(this.habilidad, this.alcance);
    this.service.save(skill).subscribe(
      data => {
        alert("Skill añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al crear skill");
        this.router.navigate(['']);
      }
    )
  }

}
