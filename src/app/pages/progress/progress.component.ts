import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public progreso: number;

  constructor() {
    this.progreso = 70;
  }

  ngOnInit() {
  }

  cambiarProgreso(porcentajeProgreso: number) {
    if (this.progreso + porcentajeProgreso >= 0 && this.progreso + porcentajeProgreso <= 100) {
      this.progreso += porcentajeProgreso;
    }

  }

}
