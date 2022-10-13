import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  educacion: Educacion = new Educacion("", "", "", "");
  constructor(private service: EducacionService,private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.detail(id).subscribe(data => {
      this.educacion = data;
    }, err =>{
      alert("Error al cargar educación");
      this.router.navigate(['']);
    })

  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.update(id, this.educacion).subscribe(
      data => {
        alert("Educación actualizada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar la educación");
        this.router.navigate(['']);
      }
    )
  }

}
