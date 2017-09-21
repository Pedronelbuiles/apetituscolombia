import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { app_routing } from './app.routes';


//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { HeaderComponent } from './component/header/header.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { FooterComponent } from './component/footer/footer.component';
import { AsesoriasComponent } from './component/asesorias/asesorias.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    NosotrosComponent,
    FooterComponent,
    AsesoriasComponent,
    ServiciosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
