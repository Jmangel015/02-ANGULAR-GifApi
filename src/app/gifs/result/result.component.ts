import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [],
})
export class ResultComponent {
  get resultados(): Gif[] {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}
}
