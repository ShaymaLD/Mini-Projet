import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessoires-formates',
  templateUrl: './accessoires-formates.component.html',
  styleUrls: ['./accessoires-formates.component.css']
})
export class AccessoiresFormatesComponent implements OnInit {
  tabAccess = [
    { name: "Casque", image:"assets/casque.jpg", description:"Casque noir micro jack 3.5", price:10.9, available:true},
    { name: "Sac à dos PC", image:"assets/sac.jpg", description:"De couleur noir, il est destiné aux pc de 15.6\"", price:49, available:false}
  ]

  reduction: number =0;

  calculerPrix(val:string){
    let prix = this.tabAccess[0].price - this.tabAccess[0].price*Number(val)/100;
    alert("Le prix final est: "+ prix+ "DT");
  }

  calculerPrix2(){
    let prix = this.tabAccess[1].price - this.tabAccess[1].price*this.reduction/100;
    alert("Le prix final est: "+ prix+ "DT");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
