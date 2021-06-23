import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private acr: ActivatedRoute) {
    // console.log(acr.snapshot.paramMap.get('valor'));
    this.bmi = parseFloat( acr.snapshot.paramMap.get('valor'));
    console.log(this.bmi);
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if (this.bmi >= 25) {
      this.resultado = 'Exceso de Peso';
      this.interpretacion = 'Tienes un peso corporal superior a lo normal. Intente hacer mas eejercicios.';
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. Buen trabajo!';     
    } else {
      this.resultado = 'Bajo de Peso';
      this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Debes de comer más!!!';
    }
  }

}
