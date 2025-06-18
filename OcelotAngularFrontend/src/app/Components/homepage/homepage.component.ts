import { Component } from '@angular/core';

@Component({
  selector: 'ocelot-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  title: string = "Ocelot Gateway Microservices Demo";
}
