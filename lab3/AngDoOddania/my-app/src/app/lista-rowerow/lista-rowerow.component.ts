import { Component, OnInit } from '@angular/core';
import { Rower } from '../Rower';
import { RowerService } from '../rower.service';

@Component({
  selector: 'app-lista-rowerow',
  templateUrl: './lista-rowerow.component.html',
  styleUrls: ['./lista-rowerow.component.css'],
  providers: [RowerService]
})
export class ListaRowerowComponent implements OnInit {

  rowery: Rower[];
  iloscRowerowWMagazynie: number;

  constructor(private rowerService: RowerService) {
    this.iloscRowerowWMagazynie = 0;
  }

  wiecejNizDziesiec() {
    this.iloscRowerowWMagazynie = 0;
    for (const rower of this.rowery) {
      this.iloscRowerowWMagazynie += rower.ilosc;
    }
    return this.iloscRowerowWMagazynie > 10;
  }

  getRowery() {
    this.rowery = this.rowerService.getRowery();
  }

  ngOnInit() {
    this.getRowery();
  }

}
