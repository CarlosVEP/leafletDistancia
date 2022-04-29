import { Component } from '@angular/core';
import { Map, tileLayer, marker, icon, Browser } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private mapa: Map;
  private marcador: any;
  private marcador2: any;
  private icono: any;
  constructor() {}
  ionViewDidEnter(){
    this.cargarMapa();
  }
  private cargarMapa():void{
    this.mapa = new Map('mapa',{
      tap: Browser.mobile,
      dragging: Browser.mobile
    }).setView([-17.393996, -66.157086], 13);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
      attribution: 'pruebax'
    }).addTo(this.mapa);
    this.icono = icon({
      iconUrl: 'assets/imgs/icono.png',
      iconSize: [20,20]
    })
    this.marcador = marker([-17.393996, -66.157086],{icon:this.icono});
    this.marcador.addTo(this.mapa);
    this.marcador2 = marker([-17.394996, -66.157186],{icon:this.icono,draggable: true}).on('mousemove', (e)=>{
      // console.log('nueva distancia: ', e["latlng"]);
      // console.log('nueva distancia marcador: ', this.marcador2.getLatLng());
      this.getDistancia();
    });
    // this.marcador2 = marker([-17.394996, -66.157186],{icon:this.icono,draggable: true}).on('mouseup', this.getDistanciaNew);
    this.marcador2.addTo(this.mapa);
  }
  private getDistancia():void{
    //console.log('la distancia es: ', dist1.distanceTo(dist2) );
    // console.log('marcador : ', this.marcador2.getLatLng() );
    console.log('la distancia en metros es: ', this.mapa.distance(this.marcador.getLatLng(),this.marcador2.getLatLng()) );
  }
}
