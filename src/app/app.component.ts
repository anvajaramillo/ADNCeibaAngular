import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/producto', nombre: 'Producto' },
    { url: '/partido', nombre: 'Partido' },
    { url: '/apuesta', nombre: 'Apuesta' }
  ];

  
}
