import { Component } from '@angular/core';
import { BannerComoajudarComponent } from "../banner-comoajudar/banner-comoajudar.component";
import { HeaderComponent } from '../../header/header.component';
import { ListaComponent } from '../lista/lista.component';
import { CardDoepixComponent } from '../card-doepix/card-doepix.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { FooterComponent } from '../footer/footer.component';
import { ComoAjudarComponent } from "../como-ajudar/como-ajudar.component";
import { MapaComponent } from "../mapa/mapa.component";

@Component({
  selector: 'app-pagina-comoajudar',
  standalone: true,
  imports: [HeaderComponent, BannerComoajudarComponent, ListaComponent, CardDoepixComponent, ParceirosComponent, FooterComponent, ComoAjudarComponent, MapaComponent],
  templateUrl: './pagina-comoajudar.component.html',
  styleUrl: './pagina-comoajudar.component.css'
})
export class PaginaComoajudarComponent {

}
