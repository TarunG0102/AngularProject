import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilebuilderComponent } from '../Components/profilebuilder/profilebuilder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfilebuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Assignments';
}
