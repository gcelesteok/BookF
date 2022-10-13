import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioService } from './servicios/portfolio.service';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAcercaDeMiComponent } from './componentes/acerca-de-mi/edit-acerca-de-mi/edit-acerca-de-mi.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades/new-habilidades.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos/new-proyectos.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades/edit-habilidades.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos/edit-proyectos.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditAcercaDeMiComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHabilidadesComponent,
    NewProyectosComponent,
    EditHabilidadesComponent,
    EditProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  
  ],
  providers: [PortfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
