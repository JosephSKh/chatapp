import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent, NgFor, FormsModule, AboutComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
