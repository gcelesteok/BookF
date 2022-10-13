import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
 
  nombreExperiencia: string = '';
  descripcionExperiencia: string = '';
  compania: string = '';
  imgExp: string = '';
  startExp: number =0;
  endExp: string = '';
 

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const expe = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia, this.compania, this.imgExp, this.startExp, this.endExp);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al crear experiencia");
        this.router.navigate(['']);
      }
    )
  }
  

}