import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad: number = 25;
  peso: number = 60;
  altura: number = 0;
  sexo: string = '';


  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  edadResta(){
    if (this.edad === 0 ) {
      return;
    } else {
      this.edad = this.edad - 1;
    }
  }
  edadSuma(){
    this.edad = this.edad + 1;
  }

  pesoResta(){
    if (this.edad === 0) {
      return
    } else {
      this.peso = this.peso - 1;
    }
  }

  pesoSuma(){
    this.peso = this.peso + 1;
  }


  Altura (even){
    // console.log(even.target.value);
    this.altura = even.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }
  femenino(){
    this.sexo = 'Femenino';
  }

  calcular(){
    const bmi = this.peso * Math.pow(this.altura / 100, 2);
    // console.log(bmi.toFixed(1));
    this.router.navigate(['resultado', bmi.toFixed(1)]);
  }
}
