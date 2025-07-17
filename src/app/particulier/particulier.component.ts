import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-particulier',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './particulier.component.html',
  styleUrl: './particulier.component.scss'
})
export class ParticulierComponent {

}
