import { Component, Injectable } from '@angular/core';
import { GifsModule } from '../../gifs/gifs.module';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial() {
    return this.gifsServices.historial;
  }
  constructor(private gifsServices: GifsService) {}

  Buscar(termino: string) {
    this.gifsServices.buscarGifs(termino);
  }
}
