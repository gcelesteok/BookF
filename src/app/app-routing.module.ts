import{ NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import {LoginComponent} from './componentes/login/login.component';
import { EditAcercaDeMiComponent } from './componentes/acerca-de-mi/edit-acerca-de-mi/edit-acerca-de-mi.component';
import{ NewEducacionComponent} from './componentes/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades/new-habilidades.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos/new-proyectos.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades/edit-habilidades.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos/edit-proyectos.component';
import { GuardGuard } from './servicios/guard.guard';
const routes: Routes =[
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'nueva-exp', component: NewExperienciaComponent, canActivate:[GuardGuard]},
{path: 'editar-exp/:id', component: EditExperienciaComponent, canActivate:[GuardGuard]},
{path: 'editar-acerca-de-mi/:id', component: EditAcercaDeMiComponent, canActivate:[GuardGuard]},
{path: 'nueva-edu', component: NewEducacionComponent, canActivate:[GuardGuard]},
{path: 'editar-edu/:id', component: EditEducacionComponent, canActivate:[GuardGuard]},
{path: 'nueva-skill', component: NewHabilidadesComponent, canActivate:[GuardGuard]},
{path: 'editar-skill/:id', component: EditHabilidadesComponent, canActivate:[GuardGuard]},
{path: 'nuevo-proyecto', component: NewProyectosComponent, canActivate:[GuardGuard]},
{path: 'editar-proyecto/:id', component: EditProyectosComponent, canActivate:[GuardGuard]},
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }