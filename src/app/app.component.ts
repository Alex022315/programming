import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='BOTONES'
  valor = 2;
  sumar() {
    this.valor +=1;
  }
  restar() {
    this.valor -= 1;

  };
}
