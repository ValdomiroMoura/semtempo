import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
  ])]
})
export class TelaCadastroComponent{
  @Input () activePane: PaneType = 'left';
  constructor() { }

}
type PaneType = 'left' | 'right';
