import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root', // To use the component on any file, use it as a tag.
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Import the components to use on the .html file.
  templateUrl: './app.component.html', // Specify the HTML file
  styleUrl: './app.component.scss', // Specify the style file of the component.
})
export class AppComponent {
  title = 'ANGULAR';
}
