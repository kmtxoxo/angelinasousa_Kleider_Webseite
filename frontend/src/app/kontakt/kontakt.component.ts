import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  scrollwheel: boolean;
  draggable: boolean;
  mapType: string;
  constructor() { }
  ngOnInit() {
    this.lat = 49.8545275;
    this.lng = 8.6533407;
    this.zoom = 15;
    this.scrollwheel = false;
    this.draggable = false;
    this.mapType = 'ROADMAP';
  }

}
