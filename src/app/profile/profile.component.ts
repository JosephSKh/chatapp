import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(
    private ar: ActivatedRoute,
  ){
    this.ar.params.subscribe(
      (params) => {
        console.log(params)
      }
    );
    this.ar.queryParams.subscribe(
      (params) => {
        console.log(params)
      }
    );
  }
  ngOnInit(): void {
    
  }
}
