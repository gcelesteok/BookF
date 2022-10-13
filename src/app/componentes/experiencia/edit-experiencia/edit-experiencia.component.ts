import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experiencia:Experiencia=new Experiencia("","","","",0,"");
  
  constructor(private sExperiencia: SExperienciaService , private activatedRouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data =>{
      this.experiencia = data;
    }, err =>{
      alert("Error al cargar experiencia");
      
    }
    )
  }
  onUpdate(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.experiencia).subscribe(
      data => {
        alert("Experiencia actualizada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar la experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
